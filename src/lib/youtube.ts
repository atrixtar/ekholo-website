/** Fetch and parse the Ekholo YouTube channel RSS feed. */

const CHANNEL_ID = "UCem8q2dp0_j9DDdxC0m9U-A";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export interface YouTubeVideo {
  title: string;
  videoId: string;
  url: string;
  published: string; // ISO date string
  thumbnail: string;
}

/** Decode common XML / HTML entities. */
function decodeEntities(str: string): string {
  return str
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/**
 * Parse a single `<entry>` block from the YouTube Atom feed.
 */
function parseEntry(entryXml: string): YouTubeVideo | null {
  const tag = (name: string): string => {
    const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i");
    const m = entryXml.match(re);
    if (!m) return "";
    let val = m[1].trim();
    if (val.startsWith("<![CDATA[") && val.endsWith("]]>")) {
      val = val.slice(9, -3);
    }
    return val.trim();
  };

  const title = tag("title");
  const videoId = tag("yt:videoId");
  const published = tag("published");

  if (!title || !videoId) return null;

  return {
    title: decodeEntities(title),
    videoId,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    published: published || "",
    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

/**
 * Fetch all videos from the YouTube channel RSS feed.
 * Revalidates every 604_800 seconds (7 days / 1 week).
 */
export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 604800 }, // re-fetch once per week
    });

    if (!res.ok) return [];

    const xml = await res.text();

    // YouTube Atom feeds use <entry>, not <item>
    const entries = xml.split("<entry>").slice(1);

    const videos: YouTubeVideo[] = [];

    for (const raw of entries) {
      const entryXml = raw.split("</entry>")[0];
      const video = parseEntry(entryXml);
      if (video) videos.push(video);
    }

    return videos;
  } catch {
    return [];
  }
}
