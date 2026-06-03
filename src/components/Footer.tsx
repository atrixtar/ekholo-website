import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-[0.2em]">EKHOLO</span>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
              The Content Climb System builds the complete post-click conversion
              infrastructure that cold traffic actually needs before it will buy.
              No vanity metrics. No jargon. No black box.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Get Started
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Apply for a Diagnostic
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Ekholo. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            The Content Climb System&trade;
          </p>
        </div>
      </div>
    </footer>
  );
}
