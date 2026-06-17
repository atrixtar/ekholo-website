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
  FloatingParticles,
  GoldGlow,
  GlassCard,
  TiltCard,
  ParallaxLayer,
} from "@/components/Animations";
import { FAQAccordion } from "@/components/FAQ";

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative bg-charcoal text-white overflow-hidden min-h-[90vh] flex items-center noise">
      {/* Layered atmospheric gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(198,164,78,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgba(198,164,78,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_80%,rgba(198,164,78,0.08),transparent_50%)]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating gold particles */}
      <FloatingParticles count={14} />
      {/* Central gold glow */}
      <GoldGlow size={600} className="-translate-y-[10%]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              The Content Climb System&trade;
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight">
              People click your ad.
              <br />
              <span className="text-gold">Then they vanish.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              A stranger sees your ad. She clicks. She lands on a page that says
              nothing about why she should trust you. So she leaves. You paid for
              that click. We build the path that turns her into a buyer &mdash;
              from the first glance to the final sale.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="btn-glow group inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-base hover:shadow-[0_0_30px_rgba(198,164,78,0.3)] hover:scale-[1.03]"
              >
                Show Me Where It Breaks
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
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all text-base glass"
              >
                See What It Costs
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-6 text-sm text-white/30">
              Our prices are on the wall, not behind a phone call. 10% of your
              ad spend + a flat build fee.
            </p>
          </FadeUp>
        </div>
      </div>
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
          We build on these platforms
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

/* ─── STATS ─── */
function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {[
            { value: 62, suffix: "%", label: "of business owners have thought about firing their agency over hidden reports" },
            { value: 76, suffix: "%", label: "of ad budgets burn through pages that were never built to sell" },
            { value: 3, suffix: "–4x", label: "more buyers from the same spend when you fix what sits between the click and the sale" },
            { value: 90, suffix: "+", label: "days to build, test, and prove a machine that runs without you watching it" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <TiltCard>
                <div className="text-center p-6 rounded-2xl bg-background border border-charcoal/5 card-lift border-glow">
                  <p className="text-4xl sm:text-5xl font-bold text-gradient-gold">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm text-slate leading-relaxed">{stat.label}</p>
                </div>
              </TiltCard>
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
                Your ad works fine.
                <br />
                The page behind it doesn&apos;t.
              </h2>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                A stranger clicks your ad. She lands on a page that looks like
                every other page she saw today. Nothing tells her why you&apos;re
                different. Nothing shows proof. Nothing walks her toward a
                decision. So she hits the back button. You paid for that visit.
                She gave you three seconds. And your page wasted all of them.
              </p>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="space-y-4">
              {[
                {
                  icon: "01",
                  title: "You swapped the images and the headlines. Nothing changed.",
                  desc: "Because the pictures on the ad were never the problem.",
                },
                {
                  icon: "02",
                  title: "You narrowed the audience. Still nothing.",
                  desc: "Because the right people landed on the wrong page.",
                },
                {
                  icon: "03",
                  title: "You handed it to an agency. Same flat line.",
                  desc: "Because they polished the ad and ignored everything after it.",
                },
                {
                  icon: "04",
                  title: "You doubled the budget. It got worse.",
                  desc: "Because you pushed twice the water through a pipe with holes in it.",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex gap-4 p-5 rounded-xl bg-white border border-charcoal/5 card-lift border-glow"
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

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Proof Layer",
      description:
        "We gather your best wins — screenshots, before-and-afters, customer stories — and turn them into a wall of evidence. A stranger sees this before she sees a price. By the time she scrolls past it, she already believes you can deliver.",
      detail: "Month 1",
    },
    {
      number: "02",
      title: "The Warm-Up Article",
      description:
        "A short piece that sits between your ad and your offer. It teaches the reader something useful, names the problem she already feels, and walks her toward your solution. She arrives at your sales page already nodding.",
      detail: "Month 1–2",
    },
    {
      number: "03",
      title: "Sales Page / Video",
      description:
        "This is where the sale happens. We write a page — or film a video — built around one question: why does your solution work when others don't? Every line answers that question. Every proof point lands at the right moment.",
      detail: "Month 1–2",
    },
    {
      number: "04",
      title: "Checkout Flow",
      description:
        "She decided to buy. Now nothing should slow her down. We strip away distractions, remove unnecessary steps, and keep the trust alive from the last page she saw all the way through to the confirmation screen.",
      detail: "Month 2",
    },
    {
      number: "05",
      title: "Follow-Up Messages",
      description:
        "Seven out of ten visitors leave without buying — even on good pages. We write a sequence of messages that reaches them after they leave: reminders, proof, answers to the hesitation they felt. Many come back and buy within a week.",
      detail: "Month 2–3",
    },
    {
      number: "06",
      title: "Test, Measure, Sharpen",
      description:
        "We run two versions of each piece, side by side, and watch which one sells more. Every week, the weaker version dies and the winner stays. Over months, this compounds. Your numbers climb without you touching anything.",
      detail: "Ongoing",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-charcoal text-white noise overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl mb-16">
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The Climb Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <TextReveal text="Six pieces. One path. Each one hands the buyer to the next." />
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              You hired a copywriter who didn&apos;t know your ad angle. You
              hired an email person who didn&apos;t know your landing page. Each
              piece was built in a separate room. That&apos;s why none of them
              fit together. We build every piece in the same room, at the same
              time, pointing at the same sale.
            </p>
          </div>
        </FadeUp>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 relative ${
                    i % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(198,164,78,0.4)]" />
                    <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                  </div>
                  <div
                    className={`${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                  >
                    <div className="p-6 rounded-2xl glass border-glow group">
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
                You will see every nail
                <br />
                we hammer into this thing.
              </h2>
              <p className="mt-6 text-lg text-slate leading-relaxed">
                Every week, you open a report. It shows what we built, what we
                tested, and what moved the needle. Not a glossy PDF full of
                impressions. A short document tied to the money that came in and
                the money that went out.
              </p>
              <GlowLine className="my-8" />
              <p className="text-sm text-slate italic">
                &ldquo;They sent me beautiful reports. Forty pages. Not a single
                line explained why my bank account looked the same.&rdquo;
                &mdash; That era is over.
              </p>
            </div>
          </FadeLeft>
          <FadeRight>
            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {[
                {
                  title: "Prices on the wall",
                  desc: "10% of ad spend + a flat build fee. You read it here before we ever speak. No guessing.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Weekly proof of work",
                  desc: "What we built this week. What we tested. What won. What lost. Tied to your revenue, not our jargon.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Numbers that touch the bank",
                  desc: "How much you spent. How many people bought. What each buyer cost you. What changed from last week.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
                {
                  title: "You own everything we build",
                  desc: "Walk away after three months and you take every page, every email, every asset with you. Nothing held hostage.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-5 rounded-xl bg-background border border-charcoal/5 card-lift border-glow group">
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

/* ─── SOCIAL PROOF ─── */
function SocialProofSection() {
  const quotes = [
    {
      quote:
        "My ads aren't failing because the pictures are wrong. They're failing because the person who clicks has no reason to believe me yet. She lands cold and leaves cold.",
      attribution: "Online store owner, $45K/month in ads",
    },
    {
      quote:
        "They couldn't explain what they were doing without hiding behind words I didn't understand. I left every meeting more confused than when I walked in. That's not complexity — that's a curtain.",
      attribution: "Former agency client",
    },
    {
      quote:
        "Two months of work. Not a single new customer. When I asked what went wrong, they pointed the finger at me. I was the one writing the cheques.",
      attribution: "Business owner, $28K spent",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Does this sound like your story?
            </h2>
            <p className="mt-4 text-lg text-slate">
              Real words from real owners who watched their ad budgets disappear
              into someone else&apos;s pockets.
            </p>
          </div>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {quotes.map((item, i) => (
            <StaggerItem key={i}>
              <blockquote className="h-full p-8 rounded-2xl bg-white border border-charcoal/5 card-lift border-glow flex flex-col">
                <div className="text-gold text-4xl leading-none mb-4" style={{ textShadow: "0 0 30px rgba(198,164,78,0.3)" }}>&ldquo;</div>
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
              We built this for one kind of business.
            </h2>
            <p className="mt-4 text-slate">
              Not everyone. Not most people. Read both columns and you&apos;ll
              know in thirty seconds.
            </p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeLeft>
            <div className="p-8 rounded-2xl bg-background border border-gold/10 card-lift border-glow">
              <h3 className="text-lg font-bold text-charcoal flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm font-bold">
                  &#10003;
                </span>
                Walk through this door if&hellip;
              </h3>
              <ul className="space-y-4">
                {[
                  "You spend $3K–$100K every month on Google or Meta ads and the bank statement doesn't match the dashboard",
                  "Your product sells well once people find it — the machine that finds them is the broken part",
                  "You've hired at least one agency, one freelancer, or burned a weekend doing it yourself",
                  "You want to see what's being built, why it exists, and whether it's working — every single week",
                  "You can commit three months, because you know a house isn't built in a weekend",
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
                This door is closed if&hellip;
              </h3>
              <ul className="space-y-4">
                {[
                  "You want someone to press buttons inside an ad platform and call it strategy",
                  "You expect a guaranteed return number before we've looked under the hood",
                  "You need a miracle in two weeks — real building takes real time",
                  "You spend less than $3,000 a month on ads — the economics don't work below that floor",
                  "You want to hand it off and never look at it again — this works only if you stay in the room",
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

/* ─── FAQ ─── */
function FAQSection() {
  const faqs = [
    {
      q: "Every agency says they're different. Why should I believe you?",
      a: "Don't believe us. Look at the evidence instead. Our prices are published on this site — you saw them before we spoke. Our case studies show what was spent, what we charged, and what came back in revenue. Every other agency in this space hides both. That's not a claim of difference. It's a structural fact you can verify in two clicks.",
    },
    {
      q: "Why do I have to commit for three months?",
      a: "Because a house isn't built in a weekend. Month one: we build the pages, the proof, the warm-up article. Month two: we wire the email sequences and test the checkout. Month three: we run two versions of everything, side by side, and watch the numbers. Cut that short and you're judging a half-finished building. We won't take your money if we don't believe three months is enough time to move your numbers.",
    },
    {
      q: "What if the real problem is what I sell, not what sits between the ad and the sale?",
      a: "Then no amount of page-building will save it — and we'll tell you that in the diagnostic, before you spend a cent with us. We'd rather lose a client on day one than waste three months of your money proving something we already suspected. The diagnostic exists precisely so this question gets answered first.",
    },
    {
      q: "You charge a percentage of my ad spend. Won't you just push me to spend more?",
      a: "We earn more when you spend more — true. But if we push your budget into a page that doesn't sell, you fire us. So our incentive is simple: make the path work first, then scale the spend. You'll see every number in the weekly report. If the cost per buyer goes up when we increase spend, we pull back. You watch that happen in real time.",
    },
    {
      q: "What exactly lands in my inbox every week?",
      a: "A short document. It shows what we built this week, what we tested, what won, and what lost. Below that: how much you spent on ads, how many people bought, what each buyer cost, and how that compares to last week. No forty-page PDF. No graphs about impressions. Just the numbers that touch your bank account.",
    },
    {
      q: "What happens if I walk away after three months?",
      a: "You take everything. Every landing page. Every email sequence. Every sales page. Every warm-up article. Every test result. You own all of it. We don't hold your work hostage. If we've done our job, you won't want to leave. If we haven't, you shouldn't have to beg for your own assets.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Questions you should ask before signing anything.
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
    <section className="relative py-24 lg:py-32 bg-charcoal text-white overflow-hidden noise">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(198,164,78,0.1),transparent_60%)]" />
      <FloatingParticles count={8} />
      <GoldGlow size={500} className="-translate-y-[20%]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <ScaleUp>
          <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Start Here
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            You already have the traffic.
            <br />
            Let&apos;s build the road it lands on.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Answer ten questions. We&apos;ll show you exactly where people
            drop off between the ad and the sale &mdash; and which piece to
            fix first. You keep the diagnostic whether you hire us or not.
          </p>
          <div className="mt-10">
            <Link
              href="/apply"
              className="btn-glow group inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all text-lg hover:shadow-[0_0_40px_rgba(198,164,78,0.3)] hover:scale-[1.03]"
            >
              Show Me Where It Breaks
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
            Three minutes. Ten questions. No commitment.
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
