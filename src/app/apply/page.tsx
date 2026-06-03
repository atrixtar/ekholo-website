import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for a Diagnostic",
  description:
    "Tell us about your business and ad spend. We'll diagnose where your funnel is breaking and whether we can help — before you spend a dollar.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Start Here
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get your free diagnostic.
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Takes 3 minutes. We&apos;ll review your current funnel, identify
            where it&apos;s breaking, and tell you honestly whether we can help.
            You keep the diagnostic regardless.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-charcoal/10 overflow-hidden">
            <iframe
              data-tally-src="https://tally.so/r/PdkGOQ?transparentBackground=1"
              loading="lazy"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Content Climb System Application"
              className="w-full"
            />
          </div>
          <TallyScript />
        </div>
      </section>
    </>
  );
}

function TallyScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}
        `,
      }}
    />
  );
}
