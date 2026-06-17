import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, ScaleUp } from "@/components/Animations";
import { fetchYouTubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Live Audits",
  description:
    "We open real businesses on camera, find the break between the ad and the sale, and show you the fix. No scripted wins. No fictional numbers. Just the diagnostic in action.",
};

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function CaseStudiesPage() {
  const videos = await fetchYouTubeVideos();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Live Audits
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                We open real businesses on camera.
                <br />
                Watch us find the break.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                No fictional case studies. No made-up numbers. We pull up a real
                business, walk through every step from the ad to the checkout,
                and show you exactly where the buyer drops off and why. This is
                the diagnostic in action &mdash; the same thinking we bring to
                every client.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {videos.length === 0 ? (
            <p className="text-center text-slate">
              Audits are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <FadeUp key={video.videoId}>
                  <div className="group rounded-2xl bg-white border border-charcoal/5 hover:border-gold/30 overflow-hidden transition-all hover:shadow-xl flex flex-col h-full">
                    {/* Thumbnail with play overlay */}
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video overflow-hidden bg-charcoal"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:scale-110 transition-all">
                          <svg
                            className="w-7 h-7 text-charcoal ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs text-slate mb-3">
                        {formatDate(video.published)}
                      </p>
                      <h2 className="text-base font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">
                        {video.title}
                      </h2>
                      <div className="mt-auto pt-4">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                        >
                          Watch the audit &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-sm text-slate">
              Every audit asks the same question: where does a stranger stop
              trusting you between the ad and the checkout? We look at the order
              of the pages, the proof on each one, the qualifying step, and when
              you ask for the money. The same thinking runs inside every client
              engagement.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScaleUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Want us to audit yours?
              <br />
              Start with the diagnostic.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Ten questions. Three minutes. You walk away knowing exactly where
              the break sits and which piece to fix first.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-lg hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
            >
              Show Me Where It Breaks
            </Link>
          </ScaleUp>
        </div>
      </section>
    </>
  );
}
