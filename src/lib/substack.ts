/** Fetch and parse the Ekholo Substack RSS feed. */

/** Decode common HTML entities that appear in RSS feeds. */
function decodeEntities(str: string): string {
  return str
    .replace(/&#8217;/g, "’") // right single quote
    .replace(/&#8216;/g, "‘") // left single quote
    .replace(/&#8220;/g, "“") // left double quote
    .replace(/&#8221;/g, "”") // right double quote
    .replace(/&#8211;/g, "–") // en dash
    .replace(/&#8212;/g, "—") // em dash
    .replace(/&#38;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

export interface SubstackPost {
  title: string;
  subtitle: string;
  url: string;
  date: string; // ISO date string
  readTime: string;
}

/**
 * Rough reading-time estimate: ~238 words/minute.
 * Strips HTML tags, counts words, rounds up.
 */
function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ").length;
  const minutes = Math.max(1, Math.ceil(words / 238));
  return `${minutes} min read`;
}

/**
 * Parse a single `<item>` block from the RSS XML.
 * We do lightweight regex parsing to avoid adding an XML library.
 */
function parseItem(itemXml: string): SubstackPost | null {
  const tag = (name: string): string => {
    const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i");
    const m = itemXml.match(re);
    if (!m) return "";
    let val = m[1].trim();
    // Strip CDATA wrapper if present
    if (val.startsWith("<![CDATA[") && val.endsWith("]]>")) {
      val = val.slice(9, -3);
    }
    return val.trim();
  };

  const title = tag("title");
  const link = tag("link");
  const description = tag("description");
  const pubDate = tag("pubDate");
  const contentEncoded = tag("content:encoded");

  if (!title || !link) return null;

  return {
    title: decodeEntities(title),
    subtitle: decodeEntities(description),
    url: link,
    date: pubDate ? new Date(pubDate).toISOString() : "",
    readTime: contentEncoded ? estimateReadTime(contentEncoded) : "5 min read",
  };
}

/**
 * Fetch all posts from the Substack RSS feed.
 * Called at build time (ISR) — revalidates every 3 600 seconds (1 hour).
 */
export async function fetchSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch("https://ekholo.substack.com/feed", {
      next: { revalidate: 3600 }, // re-fetch at most once per hour
    });

    if (!res.ok) return [];

    const xml = await res.text();

    // Split on <item> boundaries
    const items = xml.split("<item>").slice(1); // drop everything before first <item>

    const posts: SubstackPost[] = [];

    for (const raw of items) {
      const itemXml = raw.split("</item>")[0];
      const post = parseItem(itemXml);
      if (post) posts.push(post);
    }

    return posts;
  } catch {
    return [];
  }
}
