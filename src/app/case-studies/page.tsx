import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, FadeLeft, FadeRight, ScaleUp } from "@/components/Animations";
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
                Live Audits &amp; Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Real numbers. Real businesses.
                <br />
                No fiction.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                We pull up a real business, walk through every step from the ad
                to the checkout, and show you exactly where the buyer drops off
                and why. Below, the numbers from a real engagement &mdash; not a
                mock-up, not a projection. What was spent, what changed, and
                what came back.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Case Study &bull; August 2026
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-4">
              From scattered spend to 11x return.
            </h2>
            <p className="text-lg text-slate leading-relaxed max-w-3xl mb-16">
              A bleeding ad account turned into a revenue machine in 10 days,
              spending less money. Same product. Same landing page. Same
              audience pool. The only thing that changed was what the ad said
              and how we tested it.
            </p>
          </FadeUp>

          {/* Before / After metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <FadeLeft>
              <div className="rounded-2xl border border-charcoal/10 bg-white p-8">
                <p className="text-xs font-semibold text-slate uppercase tracking-[0.2em] mb-6">
                  Before &mdash; The June Campaign
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 20,931
                    </p>
                    <p className="text-sm text-slate mt-1">Ad spend</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      13
                    </p>
                    <p className="text-sm text-slate mt-1">Purchases</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 1,610
                    </p>
                    <p className="text-sm text-slate mt-1">Cost per sale</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      1.58x
                    </p>
                    <p className="text-sm text-slate mt-1">Return on ad spend</p>
                  </div>
                </div>
              </div>
            </FadeLeft>
            <FadeRight>
              <div className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-8">
                <p className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-6">
                  After &mdash; What We Built
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 13,226
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Ad spend <span className="text-emerald-600 font-semibold">&darr; 37%</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      51
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Purchases <span className="text-emerald-600 font-semibold">&uarr; 292%</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 259
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Cost per sale <span className="text-emerald-600 font-semibold">&darr; 84%</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-gold">
                      11.3x
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Return on ad spend <span className="text-emerald-600 font-semibold">&uarr; 615%</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeRight>
          </div>

          {/* Revenue callout */}
          <FadeUp>
            <div className="rounded-2xl bg-charcoal text-white p-8 sm:p-10 text-center mb-16">
              <p className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                Revenue
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
                <div>
                  <p className="text-sm text-white/40">Before</p>
                  <p className="text-2xl font-bold">KES 33,000</p>
                </div>
                <span className="text-gold text-2xl">&rarr;</span>
                <div>
                  <p className="text-sm text-gold/60">After</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-gold">
                    KES 149,484
                  </p>
                </div>
                <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-full">
                  +353%
                </span>
              </div>
              <p className="mt-6 text-sm text-white/40">
                For every KES 1 spent on ads, KES 11.30 came back.
              </p>
            </div>
          </FadeUp>

          {/* What we changed */}
          <FadeUp>
            <h3 className="text-2xl font-bold text-charcoal mb-8">
              What we changed.
            </h3>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                num: "01",
                title: "Tested the desire, not the audience",
                desc: "Two competing messages — fear of job loss vs. dream of wealth — ran head-to-head. The budget told us which one hit harder.",
              },
              {
                num: "02",
                title: "Found the winning nerve",
                desc: "Self-preservation won. People could picture losing their job. They couldn't picture seven figures. The ad that showed them the HR office beat the one that showed them a bank account.",
              },
              {
                num: "03",
                title: "Built fresh variations before fatigue set in",
                desc: "When the winner's cost started climbing, new scripts — same core fear, different emotional entry point — replaced it before the audience went numb.",
              },
              {
                num: "04",
                title: "Chased the people who almost bought",
                desc: "A separate retargeting campaign reached the 98 people who started checkout and left. Three of them came back and paid.",
              },
            ].map((step) => (
              <FadeUp key={step.num}>
                <div className="p-6 rounded-xl bg-white border border-charcoal/5 hover:border-gold/20 transition-colors h-full">
                  <span className="text-xs font-bold text-gold">{step.num}</span>
                  <h4 className="text-base font-bold text-charcoal mt-2 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* What's still on the table */}
          <FadeUp>
            <div className="rounded-2xl bg-cream border border-gold/10 p-8 sm:p-10">
              <h3 className="text-xl font-bold text-charcoal mb-2">
                What&apos;s still on the table.
              </h3>
              <p className="text-sm text-slate mb-6">
                We used three of six steps. The next three are where it gets
                interesting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fix the checkout",
                    desc: "Most people who started paying didn't finish. Two fields asking for the same number, no card option visible. Fix this and sales go up without touching a single ad.",
                  },
                  {
                    title: "Long-form ad copy",
                    desc: "Written ads — 1,200+ words — that do the selling before anyone reaches the landing page. The reader arrives already convinced.",
                  },
                  {
                    title: "Advertorial landing pages",
                    desc: "A page that reads like an article but works like a sales letter. Sits between the ad and the checkout. Warms the buyer one more step before they hit the payment page.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-bold text-charcoal mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── LIVE AUDITS (YOUTUBE) ─── */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Live Audits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Watch us find the break.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-3xl mb-12">
              We open real businesses on camera, walk through every step from
              the ad to the checkout, and show you exactly where the buyer drops
              off. No scripted wins. No fictional numbers.
            </p>
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
