import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, FadeLeft, FadeRight, ScaleUp } from "@/components/Animations";
import { fetchYouTubeVideos } from "@/lib/youtube";

const EKHOLO_WHATSAPP = "254788120047";

export const metadata: Metadata = {
  title: "Results",
  description:
    "From scattered spend to 11x return. Real numbers from a real engagement — what was spent, what changed, and what came back.",
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
      {/* ─── CASE STUDY HERO ─── */}
      <section className="relative bg-charcoal text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(198,164,78,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              From KES 33,000 to KES 149,484
              <br />
              in revenue.{" "}
              <span className="text-gradient-gold">Same budget.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl">
              An ad account that was losing money started making it back
              &mdash; in 10 days, spending less. The only thing that changed
              was what the ad said.
            </p>
          </FadeUp>

          {/* Hero stat pills */}
          <FadeUp delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
                <span className="text-sm text-white/50">Ad spend</span>{" "}
                <span className="text-base font-bold text-gold">
                  &darr; 37%
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
                <span className="text-sm text-white/50">Purchases</span>{" "}
                <span className="text-base font-bold text-gold">
                  &uarr; 292%
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
                <span className="text-sm text-white/50">Cost per sale</span>{" "}
                <span className="text-base font-bold text-gold">
                  &darr; 84%
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-gold/30">
                <span className="text-sm text-white/50">Return</span>{" "}
                <span className="text-lg font-extrabold text-gold">11.3x</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <FadeLeft>
              <div className="rounded-2xl border border-charcoal/10 bg-white p-8 h-full">
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
              <div className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-8 h-full">
                <p className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-6">
                  After &mdash; What We Built
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 13,226
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Ad spend{" "}
                      <span className="text-emerald-600 font-semibold">
                        &darr; 37%
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      51
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Purchases{" "}
                      <span className="text-emerald-600 font-semibold">
                        &uarr; 292%
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                      KES 259
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Cost per sale{" "}
                      <span className="text-emerald-600 font-semibold">
                        &darr; 84%
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-gold">
                      11.3x
                    </p>
                    <p className="text-sm text-gold-dark mt-1">
                      Return{" "}
                      <span className="text-emerald-600 font-semibold">
                        &uarr; 615%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeRight>
          </div>

          {/* What we did */}
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              What we actually did.
            </h2>
            <p className="text-base text-slate mb-10 max-w-2xl">
              Same ads budget. Same product. Four changes in 10 days.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Ran two ads against each other",
                desc: "One ad talked about making more money. The other talked about not losing your job. We split the budget 50/50 and let the numbers pick the winner.",
              },
              {
                title: "Doubled down on what worked",
                desc: "The \"don't lose your job\" angle sold 4x more. So we killed the other ad and moved every shilling to the one that was already making money.",
              },
              {
                title: "Swapped the ad before it got stale",
                desc: "When costs started creeping up, we didn't wait. We wrote new versions of the same winning idea before people started ignoring it.",
              },
              {
                title: "Went back for the almost-buyers",
                desc: "98 people added to cart and left. We showed them a second ad. Three came back and paid.",
              },
            ].map((step) => (
              <FadeUp key={step.title}>
                <div className="p-6 rounded-xl bg-white border border-charcoal/5 hover:border-gold/20 transition-colors h-full">
                  <h3 className="text-base font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAID AUDITS ─── */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Revenue Leak Audit
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                We open your store on camera and find the break.
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-6">
                Built for e-commerce businesses selling on Shopify, WooCommerce,
                or any online store. We pull up your product pages, your ads,
                your checkout flow, your abandoned cart sequence &mdash; and
                show you exactly where buyers drop off and why. You keep the
                recording and the diagnosis whether you hire us or not.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full walkthrough of your ad-to-checkout path",
                  "Recorded on camera — yours to keep",
                  "Specific diagnosis: where the leak is and what to fix first",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-white/70"
                  >
                    <span className="shrink-0 mt-0.5 text-gold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-gold/20 bg-white/[0.03] p-8 sm:p-10 text-center">
                <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-2">
                  Revenue Leak Audit
                </p>
                <p className="text-5xl sm:text-6xl font-extrabold text-gold mb-1">
                  KSH 10,000
                </p>
                <p className="text-sm text-white/40 mb-8">
                  per audit &bull; 3 spots per week
                </p>
                <a
                  href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                    "Hi, I'd like to book a Revenue Leak Audit."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light hover:shadow-[0_0_30px_rgba(198,164,78,0.3)] transition-all text-base"
                >
                  Book Your Audit &rarr;
                </a>
                <p className="mt-4 text-xs text-white/25">
                  Limited to 3 audits per week so each one gets full attention.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── PAST AUDITS (YOUTUBE) ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Past Audits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-4">
              Watch us find the break.
            </h2>
            <p className="text-lg text-slate leading-relaxed max-w-3xl mb-12">
              Real businesses. On camera. No scripted wins, no fictional
              numbers &mdash; just the diagnostic in action.
            </p>
          </FadeUp>

          {videos.length === 0 ? (
            <p className="text-center text-slate">
              Audits are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <FadeUp key={video.videoId}>
                  <div className="group rounded-2xl bg-white border border-charcoal/5 hover:border-gold/30 overflow-hidden transition-all hover:shadow-xl flex flex-col h-full">
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
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs text-slate mb-3">
                        {formatDate(video.published)}
                      </p>
                      <h3 className="text-base font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">
                        {video.title}
                      </h3>
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

      {/* ─── CTA ─── */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScaleUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Want us to find yours?
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Book a Revenue Leak Audit. You walk away knowing exactly
              where the break sits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                  "Hi, I'd like to book a Revenue Leak Audit."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-base hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
              >
                Book an Audit &mdash; KSH 10,000
              </a>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all text-base"
              >
                Take the Diagnostic &rarr;
              </Link>
            </div>
          </ScaleUp>
        </div>
      </section>
    </>
  );
}
