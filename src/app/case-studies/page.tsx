import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeUp,
  AnimatedCounter,
  ScaleUp,
} from "@/components/Animations";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real businesses. Ad spend, CPA before, CPA after, revenue delta, and which funnel stage drove the change.",
};

const caseStudies = [
  {
    industry: "DTC Skincare",
    adSpend: "$12,000/month",
    cpaBefore: "$87",
    cpaAfter: "$34",
    cpaBeforeNum: 87,
    cpaAfterNum: 34,
    revenueDelta: "+$52,000/month",
    keyDriver: "Advertorial + VSL rebuild",
    summary:
      "A skincare brand was driving traffic directly to product pages from Meta ads. Cold traffic wasn't converting because there was no credibility layer or pre-sell. We built an advertorial sequence that educated prospects on the key ingredient mechanism before they ever saw a price. Combined with a VSL that addressed the top 3 objections from customer research, CPA dropped 61% in 8 weeks.",
    timeline: "8 weeks to primary result",
    reduction: "61%",
  },
  {
    industry: "B2B SaaS (HR Tech)",
    adSpend: "$28,000/month",
    cpaBefore: "$340",
    cpaAfter: "$142",
    cpaBeforeNum: 340,
    cpaAfterNum: 142,
    revenueDelta: "+$95,000/month in pipeline",
    keyDriver: "Lead qualification funnel + email nurture",
    summary:
      "This B2B SaaS company was running Google Search ads to a generic demo request page. The page converted at 2.1%. We replaced it with a diagnostic-style landing page that pre-qualified leads through a smart form, followed by a 7-email nurture sequence. Conversion rate increased to 5.8%, and the sales team reported lead quality improved simultaneously.",
    timeline: "10 weeks to primary result",
    reduction: "58%",
  },
  {
    industry: "Home Services (HVAC)",
    adSpend: "$6,500/month",
    cpaBefore: "$210",
    cpaAfter: "$78",
    cpaBeforeNum: 210,
    cpaAfterNum: 78,
    revenueDelta: "+$31,000/month",
    keyDriver: "Credibility assets + checkout flow",
    summary:
      "A regional HVAC company was spending on Google Local Services and Meta retargeting but had no conversion infrastructure. Prospects clicked ads and landed on a homepage with no clear path to booking. We built a dedicated service page with embedded case studies, a pricing estimator, and a 2-step booking flow. Added a review-request email sequence that generated 40+ new Google reviews in 60 days.",
    timeline: "6 weeks to primary result",
    reduction: "63%",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Ad spend. CPA before. CPA after.
                <br />
                Revenue delta. What drove it.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                No &ldquo;increased ROAS by X%&rdquo; press releases. Every
                case study shows the numbers that matter and the specific funnel
                component that made the difference.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {caseStudies.map((study, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="rounded-2xl bg-white border border-charcoal/10 overflow-hidden hover:shadow-xl transition-shadow">
                {/* Metrics bar */}
                <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-charcoal/5">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-charcoal/5">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate">
                      Monthly Ad Spend
                    </p>
                    <p className="mt-2 text-xl font-bold text-charcoal">
                      {study.adSpend}
                    </p>
                  </div>
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-charcoal/5">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate">
                      CPA Before
                    </p>
                    <p className="mt-2 text-xl font-bold text-charcoal">
                      $<AnimatedCounter target={study.cpaBeforeNum} />
                    </p>
                  </div>
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-charcoal/5">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate">
                      CPA After
                    </p>
                    <p className="mt-2 text-xl font-bold text-gold">
                      $<AnimatedCounter target={study.cpaAfterNum} />
                    </p>
                  </div>
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-charcoal/5">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate">
                      CPA Reduction
                    </p>
                    <p className="mt-2 text-xl font-bold text-gold">
                      {study.reduction}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate">
                      Revenue Delta
                    </p>
                    <p className="mt-2 text-xl font-bold text-gold">
                      {study.revenueDelta}
                    </p>
                  </div>
                </div>
                {/* Detail */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-charcoal/5 text-slate text-xs font-medium">
                      {study.timeline}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-charcoal/5 text-slate text-xs font-medium">
                      Key driver: {study.keyDriver}
                    </span>
                  </div>
                  <p className="text-base text-slate leading-relaxed">
                    {study.summary}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Format note */}
      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-sm text-slate">
              Every case study follows the same format: ad spend, CPA before and
              after, revenue delta, and the specific funnel component that drove
              the change. We believe every agency should be held to this
              standard.
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
              Want results like these?
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Start with a diagnostic. We&apos;ll tell you where your funnel is
              breaking and whether we can help.
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
