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
      "For businesses ready to build their first complete conversion system.",
    features: [
      "Full Climb Stack build-out",
      "Credibility assets + advertorial",
      "VSL or sales page",
      "Landing page + checkout optimization",
      "Email sequences (welcome + recovery)",
      "Weekly performance reports",
      "Revenue-connected metrics dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    adSpend: "$10K–$50K/mo ad spend",
    price: "$2,000–$5,000",
    period: "/month",
    description:
      "For businesses with proven product-market fit that need to scale profitably.",
    features: [
      "Everything in Growth",
      "Multi-variant testing across all stages",
      "Advanced email segmentation",
      "Dedicated strategist",
      "Bi-weekly strategy calls",
      "CPA and LTV optimization",
      "Competitor funnel analysis",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    adSpend: "$50K–$100K+/mo ad spend",
    price: "$5,000–$10,000",
    period: "/month",
    description:
      "For established brands scaling aggressively across multiple channels.",
    features: [
      "Everything in Scale",
      "Multi-channel funnel architecture",
      "Custom reporting dashboards",
      "Priority response (< 4 hours)",
      "Weekly strategy sessions",
      "P&L integration and margin modeling",
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
                Published Pricing
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                No discovery call required
                <br />
                to see what we charge.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                10% of your monthly ad spend + a management fee based on
                complexity. Every competitor in our space hides their pricing
                behind a sales call. We publish ours because the first thing a
                burned buyer needs is honesty.
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
                  className={`rounded-2xl p-8 flex flex-col h-full transition-all hover:shadow-xl ${
                    tier.highlighted
                      ? "bg-charcoal text-white ring-2 ring-gold shadow-[0_0_40px_rgba(198,164,78,0.1)]"
                      : "bg-white border border-charcoal/10 hover:border-gold/20"
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
                    Apply Now
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
                  How the pricing works
                </h3>
                <div className="mt-6 space-y-5 text-sm text-slate leading-relaxed">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        Base: 10% of monthly ad spend.
                      </strong>{" "}
                      This covers ad account management across Google and Meta.
                      As your spend scales and efficiency improves, the
                      percentage cost relative to revenue decreases.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        Plus: a flat management fee
                      </strong>{" "}
                      based on complexity. This covers the Climb Stack &mdash;
                      credibility assets, advertorials, VSLs, checkout
                      optimization, and email sequences.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <p>
                      <strong className="text-charcoal">
                        3-month minimum commitment.
                      </strong>{" "}
                      Not because we want to lock you in. Because it takes 90
                      days to build, test, and prove the system. 6-month minimum
                      for seasonal businesses.
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
              Ready to see where your funnel is breaking?
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Start with a free diagnostic. You keep it regardless of whether we
              work together.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-lg hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
            >
              Get Your Free Diagnostic
            </Link>
          </ScaleUp>
        </div>
      </section>
    </>
  );
}
