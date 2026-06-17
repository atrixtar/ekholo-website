import type { Metadata } from "next";
import Link from "next/link";
import { fetchSubstackPosts } from "@/lib/substack";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Plain-language breakdowns of paid ads, what happens after the click, and why most agencies fail. No jargon. No vanity metrics. Just the thinking that separates profit from guesswork.",
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

export default async function BlogPage() {
  const posts = await fetchSubstackPosts();

  return (
    <>
      <section className="bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              No jargon. No vanity metrics.
              <br />
              Just the thinking behind the numbers.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Short pieces that name the real problem, show you what it looks
              like under the hood, and walk you to the fix. Written for business
              owners who spend real money on ads &mdash; not for other marketers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-slate">
              Articles are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.url}
                  className="group rounded-2xl bg-white border border-charcoal/5 hover:border-gold/30 transition-colors overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-slate">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-xs text-slate">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    {post.subtitle && (
                      <p className="mt-3 text-sm text-slate leading-relaxed flex-1">
                        {post.subtitle}
                      </p>
                    )}
                    <div className="mt-6">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                      >
                        Read on Substack &rarr;
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal">
            Reading about the problem is useful.
            <br />
            Having someone fix it is better.
          </h2>
          <p className="mt-4 text-slate">
            Ten questions. Three minutes. You walk away with a diagnostic
            that shows exactly where people drop off and which piece to
            build first.
          </p>
          <Link
            href="/apply"
            className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-charcoal text-white font-semibold rounded-full hover:bg-charcoal-light transition-colors text-sm"
          >
            Show Me Where It Breaks
          </Link>
        </div>
      </section>
    </>
  );
}
