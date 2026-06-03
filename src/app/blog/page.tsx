import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Straight talk about paid ads, conversion funnels, and why most agencies fail. No jargon. No vanity metrics.",
};

const posts = [
  {
    slug: "why-your-ads-get-clicks-but-no-sales",
    title: "Why Your Ads Get Clicks But No Sales",
    excerpt:
      "The problem is almost never the ad. It's what happens after the click. Here's the diagnostic framework we use to find the actual break point in your conversion path.",
    category: "Diagnosis",
    readTime: "7 min read",
    date: "2026-05-28",
  },
  {
    slug: "the-post-click-infrastructure-most-agencies-dont-build",
    title: "The Post-Click Infrastructure Most Agencies Don't Build",
    excerpt:
      "Your agency manages your ad spend. But who builds the credibility layer, the pre-sell, the sales page, the checkout flow, and the email sequences that cold traffic actually needs?",
    category: "Strategy",
    readTime: "9 min read",
    date: "2026-05-21",
  },
  {
    slug: "vanity-metrics-vs-revenue-connected-reporting",
    title: "Vanity Metrics vs. Revenue-Connected Reporting",
    excerpt:
      "Impressions, CTR, and CPM are metrics your agency can control. Revenue, CPA, and LTV are the ones that matter. Here's why most agencies report the former and avoid the latter.",
    category: "Transparency",
    readTime: "6 min read",
    date: "2026-05-14",
  },
  {
    slug: "why-individual-funnel-pieces-dont-work",
    title: "Why Individual Funnel Pieces Don't Work in Isolation",
    excerpt:
      "You hired a copywriter, a landing page designer, and a Klaviyo consultant. None of it moved the needle. Here's the structural reason why, and what the fix looks like.",
    category: "Systems",
    readTime: "8 min read",
    date: "2026-05-07",
  },
  {
    slug: "the-3-month-minimum-explained",
    title: "The 3-Month Minimum, Explained",
    excerpt:
      "Most agencies lock you in because they need the revenue. We require 3 months because that's how long it takes to build and test a complete conversion system. Here's the week-by-week breakdown.",
    category: "Process",
    readTime: "5 min read",
    date: "2026-04-30",
  },
  {
    slug: "performance-max-and-advantage-plus-what-they-wont-tell-you",
    title: "Performance Max & Advantage+ — What They Won't Tell You",
    excerpt:
      "The platforms want you to automate everything. Your agency wants you to automate everything. Here's why that serves their interests, not yours, and what granular control actually looks like.",
    category: "Platforms",
    readTime: "10 min read",
    date: "2026-04-23",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Straight talk about paid ads
              <br />
              and conversion funnels.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              No jargon. No vanity metrics. No content that sounds like it was
              written by an agency. Just the diagnostic thinking that separates
              profitable ad spend from expensive guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl bg-white border border-charcoal/5 hover:border-gold/30 transition-colors overflow-hidden flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-gold">
                      Coming soon &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal">
            Want the diagnostic, not just the diagnosis?
          </h2>
          <p className="mt-4 text-slate">
            Reading about funnel infrastructure is useful. Having someone build
            it for you is better.
          </p>
          <Link
            href="/apply"
            className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-charcoal text-white font-semibold rounded-full hover:bg-charcoal-light transition-colors text-sm"
          >
            Get Your Free Diagnostic
          </Link>
        </div>
      </section>
    </>
  );
}
