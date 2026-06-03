import Link from "next/link";
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleUp,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  LogoCarousel,
  GlowLine,
  TextReveal,
} from "@/components/Animations";
import { FAQAccordion } from "@/components/FAQ";

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative bg-charcoal text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(198,164,78,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(198,164,78,0.05),transparent_50%)]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              The Content Climb System&trade;
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight">
              Your ads get clicks.
              <br />
              <span className="text-gold">Your funnel doesn&apos;t close.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              You&apos;re spending $3K&ndash;$100K/month on ads that drive
              traffic to a page that wasn&apos;t built for cold traffic. We
              build the complete post-click infrastructure so your ad spend
              actually converts.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-base hover:shadow-[0_0_30px_rgba(198,164,78,0.3)]"
              >
                Get Your Free Diagnostic
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all text-base"
              >
                See Our Pricing
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-6 text-sm text-white/30">
              10% of ad spend + management fee &mdash; published pricing, no
              discovery call required.
            </p>
          </FadeUp>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}

/* ─── TRUST LOGOS ─── */
function TrustBar() {
  const platforms = [
    "Google Ads",
    "Meta Ads",
    "Shopify",
    "Klaviyo",
    "Google Analytics",
    "HubSpot",
    "Unbounce",
    "GoHighLevel",
  ];
  return (
    <section className="py-10 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-white/25 mb-8">
          Platforms we build on
        </p>
        <LogoCarousel>
          {platforms.map((name) => (
            <span
              key={name}
              className="text-white/20 text-sm font-semibold tracking-wide whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </LogoCarousel>
      </div>
    </section>
  );
}

/* ─── STATS (animated counters like Disruptive) ─── */
function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {[
            { value: 62, suffix: "%", label: "of marketers have considered firing their agency for lack of transparency" },
            { value: 76, suffix: "%", label: "of marketing spend is wasted on traffic that doesn't convert" },
            { value: 3, suffix: "–4x", label: "more revenue from the same ad spend when you fix the post-click path" },
            { value: 90, suffix: "+", label: "days minimum to build, test, and prove a complete conversion system" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-gold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-slate leading-relaxed">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeLeft>
            <div>
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                The Real Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight leading-tight">
                The problem isn&apos;t your ads.
                <br />
                It&apos;s what happens after the click.
              </h2>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                Cold traffic &mdash; people who have never heard of you &mdash;
                needs a specific journey before they&apos;ll buy. An ad click is
                the beginning, not the destination. Without the right
                infrastructure between the click and the sale, every dollar you
                spend is a dollar you donate to the platform.
              </p>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="space-y-4">
              {[
                {
                  icon: "01",
                  title: "You changed the creative. Nothing moved.",
                  desc: "Because the creative wasn't the problem.",
                },
                {
                  icon: "02",
                  title: "You tightened the targeting. Nothing moved.",
                  desc: "Because the targeting wasn't the problem either.",
                },
                {
                  icon: "03",
                  title: "You hired an agency. Nothing moved.",
                  desc: "Because they optimized the ad, not what happens after it.",
                },
                {
                  icon: "04",
                  title: "You increased the budget. It got worse.",
                  desc: "Because you poured more traffic into a broken funnel.",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex gap-4 p-5 rounded-xl bg-white border border-charcoal/5 hover:border-gold/20 transition-colors"
                >
                  <span className="text-sm font-mono font-bold text-gold mt-0.5 shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal">{item.title}</p>
                    <p className="text-sm text-slate mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS (Timeline like Disruptive) ─── */
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Credibility Assets",
      description:
        "Case studies, testimonials, and the proof framework that cold traffic needs before it will click. We build the evidence layer that makes strangers trust you.",
      detail: "Month 1",
    },
    {
      number: "02",
      title: "Advertorial / Pre-Sell",
      description:
        "The bridge between the ad and the sale. A content piece that educates, builds belief, and pre-qualifies the prospect before they ever see a price.",
      detail: "Month 1–2",
    },
    {
      number: "03",
      title: "VSL / Sales Page",
      description:
        "The conversion engine. Built for cold traffic, tested against real data, and optimized for revenue — not vanity metrics.",
      detail: "Month 1–2",
    },
    {
      number: "04",
      title: "Product Page + Checkout",
      description:
        "Friction-free purchase flow that maintains the trust and momentum built in every prior stage. Every element is tested.",
      detail: "Month 2",
    },
    {
      number: "05",
      title: "Email Sequences",
      description:
        "Automated follow-up that captures the 70–90% who didn’t buy on the first visit. Recovery, nurture, and segmented messaging.",
      detail: "Month 2–3",
    },
    {
      number: "06",
      title: "Continuous Testing",
      description:
        "Every stage is measured against revenue. We test, learn, and compound improvements every week. You see every result.",
      detail: "Ongoing",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl mb-16">
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The Climb Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <TextReveal text="Six stages. One system. Every piece connected to revenue." />
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              The reason individual pieces haven&apos;t worked is that each one
              was optimized in isolation. We build the connection between every
              stage.
            </p>
          </div>
        </FadeUp>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 relative ${
                    i % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(198,164,78,0.4)]" />
                  </div>

                  <div
                    className={`${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                  >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all hover:bg-white/[0.07] group">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <span className="text-xs font-mono font-bold text-gold tracking-wider">
                          {step.number}
                        </span>
                        <span className="text-[10px] tracking-widest uppercase text-white/30 px-2 py-0.5 rounded-full border border-white/10">
                          {step.detail}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ANTI BLACK BOX ─── */
function AntiBlackBoxSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeLeft>
            <div>
              <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                No Black Box
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                You&apos;ll never wonder
                <br />
                where your money went.
              </h2>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                Every week, you see what was built, what was tested, what the
                conversion rate is at each funnel stage, and what the revenue
                attribution shows.
              </p>
              <GlowLine className="my-8" />
              <p className="text-sm text-slate italic">
                &ldquo;Reporting that&apos;s all clicks and impressions with
                zero connection to revenue.&rdquo; &mdash; That&apos;s what
                you&apos;re leaving behind.
              </p>
            </div>
          </FadeLeft>
          <FadeRight>
            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {[
                {
                  title: "Published pricing",
                  desc: "10% of ad spend + management fee. You see it before we ever talk.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Weekly deliverable reports",
                  desc: "What was built, what was tested, what moved. Connected to revenue, not impressions.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Revenue-connected metrics",
                  desc: "Ad spend → CPA → conversion rate per stage → revenue delta. No vanity numbers.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
                {
                  title: "You keep everything",
                  desc: "Every asset we build is yours. If you leave, you walk away with a complete conversion system.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-5 rounded-xl bg-background border border-charcoal/5 hover:border-gold/20 transition-all hover:shadow-sm group">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF / QUOTES ─── */
function SocialProofSection() {
  const quotes = [
    {
      quote:
        "My ads aren’t failing because creative sucks. They’re failing because the person seeing them doesn’t have enough reason to believe me yet.",
      attribution: "Ecommerce brand owner, $45K/mo ad spend",
    },
    {
      quote:
        "When they can’t explain what they’re doing without jargon and you leave every meeting confused about where your money is going — that’s not complexity, it’s a smokescreen.",
      attribution: "Former agency client",
    },
    {
      quote:
        "All your work over two months produced no results. There was no strategy, just retargeting and a lot of complaints and excuses.",
      attribution: "Business owner, $28K wasted",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Sound familiar?
            </h2>
            <p className="mt-4 text-lg text-slate">
              These are real words from real business owners spending real money
              on ads that don&apos;t convert.
            </p>
          </div>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {quotes.map((item, i) => (
            <StaggerItem key={i}>
              <blockquote className="h-full p-8 rounded-2xl bg-white border border-charcoal/5 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-gold text-4xl leading-none mb-4">&ldquo;</div>
                <p className="text-base text-charcoal leading-relaxed flex-1">
                  {item.quote}
                </p>
                <footer className="mt-6 text-sm text-slate">
                  &mdash; {item.attribution}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─── WHO THIS IS FOR ─── */
function WhoThisIsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Built for a specific kind of business.
            </h2>
            <p className="mt-4 text-slate">
              We don&apos;t work with everyone. Here&apos;s how to know if this
              is the right fit.
            </p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeLeft>
            <div className="p-8 rounded-2xl bg-background border border-gold/10">
              <h3 className="text-lg font-bold text-charcoal flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm font-bold">
                  &#10003;
                </span>
                This is for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {[
                  "You’re spending $3K–$100K+/month on Google or Meta ads",
                  "You have product-market fit — customers who find you tend to stay",
                  "You’ve tried at least one agency, freelancer, or DIY approach",
                  "You want to understand what’s being built, why, and what the data says",
                  "You’re willing to commit 3 months to see real infrastructure built",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal">
                    <span className="text-gold mt-0.5 shrink-0">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="p-8 rounded-2xl bg-background border border-charcoal/5">
              <h3 className="text-lg font-bold text-charcoal flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-charcoal/5 text-slate flex items-center justify-center text-sm">
                  &#10007;
                </span>
                This isn&apos;t for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {[
                  "You’re looking for someone to just “run your ads”",
                  "You want guaranteed ROAS numbers before we’ve seen your account",
                  "You need results in 2 weeks, not 2–3 months",
                  "You’re spending less than $3,000/month on ads",
                  "You want a “set it and forget it” service with no involvement",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate">
                    <span className="text-charcoal/20 mt-0.5 shrink-0">
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ (Accordion like Pilothouse) ─── */
function FAQSection() {
  const faqs = [
    {
      q: "How is this different from every other agency?",
      a: "We don’t claim to be different. We demonstrate structural difference. Published pricing before you talk to anyone. A named system with each component defined. Case studies that show ad spend, CPA before, CPA after, and revenue delta — not ROAS percentages. The transparency is visible, not claimed.",
    },
    {
      q: "Why is there a 3-month minimum?",
      a: "Because it takes 90 days to build the infrastructure, run the first tests, and have real data to show you. We don’t take clients we don’t believe we can produce results for. The minimum exists because we’re asking you to give the system enough time to prove itself — not because we want to lock you in.",
    },
    {
      q: "What if my problem is the offer, not the funnel?",
      a: "If your offer doesn’t work, no funnel will fix it — and we’ll tell you that upfront in the diagnostic, not six months in. The fact that we diagnose before we commit is itself the answer to this question.",
    },
    {
      q: "Doesn’t the percentage-of-spend model incentivize you to push higher budgets?",
      a: "Yes — which is why we don’t recommend scaling spend until the funnel can absorb it. If we push spend before it converts, you leave. Our retention depends on your results. The transparent reporting means you can see whether higher spend is justified.",
    },
    {
      q: "What do I actually receive each week?",
      a: "A report showing what was built, what was tested, what the conversion rate is at each funnel stage, and what the revenue attribution shows. No PDFs full of impressions and CTR. Real metrics connected to real money.",
    },
    {
      q: "What happens if I leave after 3 months?",
      a: "You walk away with everything we built — credibility assets, advertorials, sales pages, email sequences, checkout optimizations. It’s all yours. We don’t hold assets hostage.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Questions you should be asking.
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <FAQAccordion faqs={faqs} />
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <ScaleUp>
          <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Start Here
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Stop paying for clicks
            <br />
            that don&apos;t convert.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Start with a diagnostic. We&apos;ll show you exactly where your
            funnel is breaking and whether we can help &mdash; before you spend
            a dollar.
          </p>
          <div className="mt-10">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-lg hover:shadow-[0_0_40px_rgba(198,164,78,0.3)]"
            >
              Get Your Free Diagnostic
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/30">
            Takes 3 minutes. No commitment. You keep the diagnostic regardless.
          </p>
        </ScaleUp>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ProblemSection />
      <HowItWorksSection />
      <AntiBlackBoxSection />
      <SocialProofSection />
      <WhoThisIsForSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
