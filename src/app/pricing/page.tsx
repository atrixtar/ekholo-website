import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ScaleUp,
} from "@/components/Animations";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Published pricing for the Content Climb System. 10% of ad spend + management fee. $1,000–$10,000/month. No discovery call required.",
};

const tiers = [
  {
    name: "Growth",
    adSpend: "$3K–$10K/mo ad spend",
    price: "$1,000–$2,000",
    period: "/month",
    description:
      "You spend enough to matter but not enough to waste. We build the full path from click to sale — every page, every email, every proof point.",
    features: [
      "Full Climb Stack — six pieces, built together",
      "Proof wall with screenshots and customer stories",
      "Warm-up article that sells before the sales page",
      "Sales page or video built around your strongest proof",
      "Checkout flow stripped of distractions",
      "Email sequences that chase the ones who leave",
      "Weekly report tied to revenue, not impressions",
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    adSpend: "$10K–$50K/mo ad spend",
    price: "$2,000–$5,000",
    period: "/month",
    description:
      "Your product sells. The machine that finds buyers is the bottleneck. We test every piece, side by side, until the numbers compound on their own.",
    features: [
      "Everything in Growth",
      "Two versions of every piece — the loser dies each week",
      "Email lists split by behaviour, not guesswork",
      "A strategist who knows your numbers by name",
      "Strategy call every two weeks",
      "Cost-per-buyer and lifetime-value tracking",
      "Competitor teardowns — how they move a stranger to a buyer",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    adSpend: "$50K–$100K+/mo ad spend",
    price: "$5,000–$10,000",
    period: "/month",
    description:
      "You run ads across multiple channels. We architect one system that connects all of them — same proof, same story, same path to revenue.",
    features: [
      "Everything in Scale",
      "One connected path across every channel",
      "Custom dashboards built for your team",
      "Four-hour response window",
      "Weekly strategy sessions",
      "Profit-and-loss integration and margin modelling",
      "Creative direction and brief development",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Prices on the Wall
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                You read what we charge
                <br />
                before we ever speak.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                10% of your monthly ad spend + a flat fee based on how much
                we build. Every competitor in this space hides their number
                behind a phone call. We print ours here because the first
                thing a burned buyer needs is a straight answer.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`rounded-2xl p-8 flex flex-col h-full card-lift ${
                    tier.highlighted
                      ? "bg-charcoal text-white ring-2 ring-gold shadow-[0_0_40px_rgba(198,164,78,0.1)]"
                      : "bg-white border border-charcoal/10 border-glow"
                  }`}
                >
                  <div>
                    {tier.highlighted && (
                      <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold mb-4">
                        Most Popular
                      </span>
                    )}
                    <p className="text-sm font-semibold text-gold">
                      {tier.adSpend}
                    </p>
                    <h2
                      className={`mt-2 text-2xl font-bold ${tier.highlighted ? "text-white" : "text-charcoal"}`}
                    >
                      {tier.name}
                    </h2>
                    <div className="mt-4">
                      <span
                        className={`text-3xl font-bold ${tier.highlighted ? "text-white" : "text-charcoal"}`}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={`text-sm ${tier.highlighted ? "text-white/60" : "text-slate"}`}
                      >
                        {tier.period}
                      </span>
                    </div>
                    <p
                      className={`mt-3 text-sm ${tier.highlighted ? "text-white/70" : "text-slate"}`}
                    >
                      {tier.description}
                    </p>
                  </div>
                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <span className="text-gold shrink-0">&#10003;</span>
                        <span
                          className={
                            tier.highlighted ? "text-white/80" : "text-slate"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/apply"
                    className={`mt-8 block text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all ${
                      tier.highlighted
                        ? "bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_20px_rgba(198,164,78,0.3)]"
                        : "bg-charcoal text-white hover:bg-charcoal-light"
                    }`}
                  >
                    Start the Diagnostic
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* How pricing works */}
          <FadeUp delay={0.2}>
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="rounded-2xl bg-cream p-8 lg:p-10">
                <h3 className="text-xl font-bold text-charcoal">
                  Two numbers. One handshake.
                </h3>
                <div className="mt-6 space-y-5 text-sm text-slate leading-relaxed">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        10% of your monthly ad spend.
                      </strong>{" "}
                      This covers the hands inside your Google and Meta accounts.
                      As your spend climbs and your cost per buyer drops, that
                      10% buys more for every dollar.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        A flat build fee based on what we build.
                      </strong>{" "}
                      This covers the Climb Stack &mdash; proof walls, warm-up
                      articles, sales pages, checkout flows, and email sequences.
                      More pieces, higher fee. Fewer pieces, lower fee.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        Three-month minimum.
                      </strong>{" "}
                      Not a lock-in. A timeline. Month one: we build the pages.
                      Month two: we wire the emails and test. Month three: we run
                      two versions of everything and watch which one wins. Cut it
                      short and you&apos;re judging a half-built house.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScaleUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              You already know the price.
              <br />
              Now find out where people drop off.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Ten questions. Three minutes. You keep the diagnostic
              whether you hire us or not.
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
