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
              From KES 33,000 to KES 150,000
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
                      KES 21,000
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
                      KES 1,600
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
                      KES 13,000
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
                      KES 260
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
                desc: "One ad talked about making more money. The other talked about not losing your job. We let Facebook decide which one to show more.",
              },
              {
                title: "Doubled down on what worked",
                desc: "The \"don't lose your job\" angle sold 4x more. So we killed the other ad and moved every shilling to the one that was already making money.",
              },
              {
                title: "Swapped the ad before people tuned out",
                desc: "The winning ad started slowing down. Before it stopped working, we wrote fresh versions of the same idea so it felt new again.",
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

      {/* ─── REVENUE LEAK AUDIT ─── */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Revenue Leak Audit
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                We go through your entire ad-to-sale path and show you
                where the money is leaking.
              </h2>
              <p className="text-base text-white/50 leading-relaxed">
                For online stores &mdash; Shopify, WooCommerce, or anywhere
                people buy from you on a screen. We look at everything a
                customer sees from the moment they click your ad to the moment
                they&apos;re supposed to pay. You walk away knowing exactly
                what to change so more people buy.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Single Platform",
                spend: "KES 150K+/month",
                platforms: "1 platform (Meta)",
                price: "KES 80,000",
                features: [
                  "Full ad account review",
                  "What your customers see before they pay",
                  "Where buyers drop off and why",
                  "Action plan — what to fix first",
                  "Discovery call",
                ],
              },
              {
                name: "Multi-Platform",
                spend: "KES 300K+/month",
                platforms: "2 platforms",
                price: "KES 150,000",
                featured: true,
                features: [
                  "Everything in Single Platform",
                  "Cross-platform budget review",
                  "Which platform is actually earning",
                  "Reallocation plan — same budget, better results",
                  "Discovery call",
                ],
              },
              {
                name: "Full-Scale",
                spend: "KES 400K–1.4M+/month",
                platforms: "3+ platforms",
                price: "KES 350,000",
                features: [
                  "Everything in Multi-Platform",
                  "Are the platforms reporting real sales?",
                  "Creative performance — which ads stopped working",
                  "Diagnostic deck for your leadership team",
                  "90-minute presentation session",
                ],
              },
            ].map((tier) => (
              <FadeUp key={tier.name}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    tier.featured
                      ? "border-2 border-gold/40 bg-gold/[0.06]"
                      : "border border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {tier.featured && (
                    <span className="inline-block self-start text-[10px] font-bold text-charcoal bg-gold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                      Most common
                    </span>
                  )}
                  <p className="text-sm font-semibold text-white/40 uppercase tracking-wider">
                    {tier.name}
                  </p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-gold mt-3 mb-1">
                    {tier.price}
                  </p>
                  <p className="text-sm text-white/30 mb-2">{tier.spend}</p>
                  <p className="text-xs text-white/25 mb-6">{tier.platforms}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-white/60">
                        <span className="shrink-0 mt-0.5 text-gold">
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                      `Hi, I'd like to book a discovery call about the ${tier.name} audit.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-8 py-4 font-semibold rounded-full transition-all text-base ${
                      tier.featured
                        ? "bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
                        : "border border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                    }`}
                  >
                    Book a Discovery Call &rarr;
                  </a>
                </div>
              </FadeUp>
            ))}
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
              Book a discovery call. We&apos;ll look at what you&apos;re
              spending and tell you if an audit makes sense.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                  "Hi, I'd like to book a discovery call about an audit."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-base hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
              >
                Book a Discovery Call &rarr;
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
