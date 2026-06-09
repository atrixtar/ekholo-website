"use client";

import { useState } from "react";

/* ─── TYPES ─── */
type AnswerLetter = "A" | "B" | "C" | "D";

interface Question {
  id: string;
  text: string;
  options: { letter: AnswerLetter; points: number; text: string }[];
}

interface ContactData {
  name: string;
  whatsapp: string;
  business: string;
  sells: string;
}

/* ─── QUESTIONS ─── */
const pages: { title: string; questions: Question[] }[] = [
  {
    title: "Traffic & Awareness",
    questions: [
      {
        id: "q1",
        text: "Where is most of your current audience coming from?",
        options: [
          { letter: "A", points: 1, text: "Word of mouth and referrals only. I don’t do any intentional content." },
          { letter: "B", points: 2, text: "I post on Instagram, Facebook, TikTok, or LinkedIn but inconsistently." },
          { letter: "C", points: 3, text: "I post consistently and get regular engagement and DM enquiries from it." },
          { letter: "D", points: 4, text: "I’m running paid ads, TikTok Live, or have a content engine driving traffic regularly." },
        ],
      },
      {
        id: "q2",
        text: "How would you describe your online presence right now?",
        options: [
          { letter: "A", points: 1, text: "I have a profile but it’s not set up to attract clients." },
          { letter: "B", points: 2, text: "I have a profile and it’s decent, but I don’t have a clear message." },
          { letter: "C", points: 3, text: "I have a clear message and people understand what I do within seconds." },
          { letter: "D", points: 4, text: "I have positioning, a lead magnet, and a way to capture contact details automatically." },
        ],
      },
    ],
  },
  {
    title: "Conversion Infrastructure",
    questions: [
      {
        id: "q3",
        text: "When someone shows interest — a DM, a comment, a referral — what happens next?",
        options: [
          { letter: "A", points: 1, text: "I respond manually and the conversation varies. No consistent next step." },
          { letter: "B", points: 2, text: "I send them to a WhatsApp chat or a basic website or landing page." },
          { letter: "C", points: 3, text: "I have a clear process: a qualifying question, a call, a proposal. I follow it every time." },
          { letter: "D", points: 4, text: "I have an automated sequence that nurtures them before I even get involved." },
        ],
      },
      {
        id: "q4",
        text: "Do you have a dedicated sales or landing page for your main offer?",
        options: [
          { letter: "A", points: 1, text: "No. I send my Instagram, my homepage, or explain everything over WhatsApp." },
          { letter: "B", points: 2, text: "I have a website but it’s general. It doesn’t isolate one specific offer." },
          { letter: "C", points: 3, text: "Yes, but it’s basic. No testimonials, no explanation of why it works, no clear CTA." },
          { letter: "D", points: 4, text: "Yes. It has proof, explains why the solution works, handles objections, and has a clear CTA." },
        ],
      },
    ],
  },
  {
    title: "Trust & Social Proof",
    questions: [
      {
        id: "q5",
        text: "What proof can you point a cold prospect to right now?",
        options: [
          { letter: "A", points: 1, text: "Nothing I can point to quickly. I’d have to explain my credibility verbally." },
          { letter: "B", points: 2, text: "I have a few happy customers but their results aren’t documented or easy to find." },
          { letter: "C", points: 3, text: "I have written testimonials or screenshots visible on my profile or page." },
          { letter: "D", points: 4, text: "I have case studies, before/afters, or video testimonials and I use them actively." },
        ],
      },
      {
        id: "q6",
        text: "Can you clearly explain why your solution works — not just what it does?",
        options: [
          { letter: "A", points: 1, text: "Not really. I describe what I offer but not the underlying reason it works." },
          { letter: "B", points: 2, text: "I can explain it verbally but it’s not written or documented anywhere." },
          { letter: "C", points: 3, text: "Yes, and I say it consistently in my content and pitches." },
          { letter: "D", points: 4, text: "Yes, and it’s the core of my landing page, content, and every sales conversation." },
        ],
      },
    ],
  },
  {
    title: "Revenue & Follow-Up",
    questions: [
      {
        id: "q7",
        text: "What happens after someone buys from you?",
        options: [
          { letter: "A", points: 1, text: "I deliver and that’s it. No structured follow-up." },
          { letter: "B", points: 2, text: "I check in manually sometimes but it’s not consistent." },
          { letter: "C", points: 3, text: "I ask for testimonials and sometimes offer repeat services or upsells." },
          { letter: "D", points: 4, text: "I have a post-purchase sequence on WhatsApp or email that generates repeat revenue automatically." },
        ],
      },
      {
        id: "q8",
        text: "How would you describe the consistency of your revenue right now?",
        options: [
          { letter: "A", points: 1, text: "Unpredictable. Good months and dry months with no pattern." },
          { letter: "B", points: 2, text: "Mostly relationship-driven. Consistent with existing clients but I can’t predict new business." },
          { letter: "C", points: 3, text: "I can roughly predict monthly revenue but it depends heavily on me being active." },
          { letter: "D", points: 4, text: "Revenue is largely predictable and parts of acquisition and retention are systemised." },
        ],
      },
    ],
  },
  {
    title: "Goals & Constraints",
    questions: [
      {
        id: "q9",
        text: "What’s the primary outcome you want from getting this right?",
        options: [
          { letter: "A", points: 1, text: "Get my first consistent stream of inbound leads without relying on referrals." },
          { letter: "B", points: 2, text: "Convert more of the leads I’m already getting. I have interest but it’s not closing." },
          { letter: "C", points: 3, text: "Run paid ads or TikTok Live profitably. I want to turn spend into predictable revenue." },
          { letter: "D", points: 4, text: "Scale what’s already working. Systemise, retain better, increase lifetime value." },
        ],
      },
      {
        id: "q10",
        text: "What’s your realistic bandwidth for building this out?",
        options: [
          { letter: "A", points: 1, text: "I have time but not much budget. I need direction to do it myself." },
          { letter: "B", points: 2, text: "I have some budget and can execute myself if I know exactly what to build." },
          { letter: "C", points: 3, text: "I have budget and want to build collaboratively — someone works alongside me through it." },
          { letter: "D", points: 4, text: "I have budget and want it executed for me. I’ll review and approve but I need it done." },
        ],
      },
    ],
  },
];

/* ─── SCORING ─── */
const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwE1BuxabFiDLDssuyxjthEoKxbcuQNRaomAsTSH-qEPUWv6YT_on7UPs5WIsIuWON_/exec";

function getLevel(score: number): { level: number; label: string } {
  if (score <= 16) return { level: 1, label: "Level 1 — Foundation missing" };
  if (score <= 24) return { level: 2, label: "Level 2 — Funnel leaking" };
  if (score <= 32) return { level: 3, label: "Level 3 — Economics broken" };
  return { level: 4, label: "Level 4 — Scaling problem" };
}

function getComponents(level: number): string {
  switch (level) {
    case 1:
      return "Positioning, Mechanism documentation, Social proof collection, Single offer page";
    case 2:
      return "Advertorial or DM qualifying script, Testimonial documentation, Landing page with proof";
    case 3:
      return "Advertorial, Sales page / VSL, Checkout optimisation, WhatsApp post-purchase sequence";
    case 4:
      return "WhatsApp commerce flow, Upsell architecture, Referral trigger, TikTok Live integration";
    default:
      return "";
  }
}

function getGoalLabel(letter: AnswerLetter): string {
  switch (letter) {
    case "A": return "Inbound leads";
    case "B": return "Better conversion";
    case "C": return "Profitable paid traffic";
    case "D": return "Scale & systemise";
  }
}

function getBandwidthLabel(letter: AnswerLetter): string {
  switch (letter) {
    case "A": return "DIY with direction";
    case "B": return "Self-execute with blueprint";
    case "C": return "Collaborative build";
    case "D": return "Done for me";
  }
}

const levelDescriptions: Record<number, string> = {
  1: "Before building a funnel, you need the foundation it runs on. Your immediate priority is proof, positioning, and a mechanism — the reason your solution works. Without these, traffic won’t convert regardless of what you spend.",
  2: "You have an audience but the handoff is broken. Leads are dying somewhere between first contact and close. The fix is usually one missing piece — a qualifying process, a page with proof, or a clear next step. We’ll find it.",
  3: "The funnel exists but the economics don’t work yet. You’re likely sending cold traffic to a page with no warm-up layer. An advertorial, a stronger sales page, and a post-purchase sequence on WhatsApp will change the numbers.",
  4: "The engine works. Now it needs systems so it runs without you in every conversation. Post-purchase retention, upsell architecture, and referral triggers are where your next revenue jump lives.",
};

const levelColors: Record<number, { bg: string; text: string; border: string; badge: string }> = {
  1: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500" },
  2: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500" },
  3: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", badge: "bg-emerald-500" },
  4: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500" },
};

/* ─── COMPONENT ─── */
export default function DiagnosticQuestionnaire() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerLetter>>({});
  const [contact, setContact] = useState<ContactData>({
    name: "",
    whatsapp: "",
    business: "",
    sells: "",
  });
  const [stage, setStage] = useState<"questions" | "contact" | "result">("questions");
  const [submitting, setSubmitting] = useState(false);

  const totalPages = pages.length;
  // Progress: questions = pages 0-4 out of 7 steps, contact = 5, result = 6
  const totalSteps = totalPages + 2;
  const currentStep =
    stage === "questions"
      ? currentPage
      : stage === "contact"
        ? totalPages
        : totalPages + 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const currentQuestions = pages[currentPage]?.questions ?? [];
  const allCurrentAnswered = currentQuestions.every((q) => answers[q.id]);
  const allAnswered = pages.every((p) => p.questions.every((q) => answers[q.id]));

  function handleSelect(questionId: string, letter: AnswerLetter) {
    setAnswers((prev) => ({ ...prev, [questionId]: letter }));
  }

  function handleNext() {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (allAnswered) {
      setStage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    if (stage === "contact") {
      setStage("questions");
      setCurrentPage(totalPages - 1);
    } else if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (!contact.name || !contact.whatsapp || !contact.business || !contact.sells) return;

    setSubmitting(true);

    const score = Object.values(answers).reduce((sum, letter) => {
      const points = { A: 1, B: 2, C: 3, D: 4 }[letter];
      return sum + points;
    }, 0);

    const { level, label } = getLevel(score);
    const components = getComponents(level);
    const goalLabel = getGoalLabel(answers.q9);
    const bandwidthLabel = getBandwidthLabel(answers.q10);

    const payload = {
      name: contact.name,
      whatsapp: contact.whatsapp,
      business: contact.business,
      sells: contact.sells,
      q1: answers.q1,
      q2: answers.q2,
      q3: answers.q3,
      q4: answers.q4,
      q5: answers.q5,
      q6: answers.q6,
      q7: answers.q7,
      q8: answers.q8,
      q9: answers.q9,
      q10: answers.q10,
      score,
      level,
      levelLabel: label,
      components,
      goalLabel,
      bandwidthLabel,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Show result regardless of webhook success
    }

    setStage("result");
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Calculate result data for the result screen
  const score = Object.values(answers).reduce((sum, letter) => {
    const points = { A: 1, B: 2, C: 3, D: 4 }[letter] ?? 0;
    return sum + points;
  }, 0);
  const { level, label: levelLabel } = getLevel(score);
  const components = getComponents(level);
  const colors = levelColors[level];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-white/30 text-right">
          {stage === "questions"
            ? `${currentPage + 1} of ${totalPages}`
            : stage === "contact"
              ? "Almost there"
              : "Complete"}
        </p>
      </div>

      {/* ─── QUESTIONS STAGE ─── */}
      {stage === "questions" && (
        <div>
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            {pages[currentPage].title}
          </p>

          <div className="space-y-10">
            {currentQuestions.map((q, qi) => (
              <div key={q.id}>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-5">
                  {qi + 1 + currentPage * 2}. {q.text}
                </h3>
                <div className="space-y-3">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.letter;
                    return (
                      <button
                        key={opt.letter}
                        onClick={() => handleSelect(q.id, opt.letter)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                          selected
                            ? "border-gold bg-gold/10 text-white"
                            : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="flex gap-3 items-start">
                          <span
                            className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                              selected
                                ? "bg-gold text-charcoal"
                                : "bg-white/10 text-white/50"
                            }`}
                          >
                            {opt.letter}
                          </span>
                          <span className="text-sm leading-relaxed">{opt.text}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between gap-4">
            {currentPage > 0 ? (
              <button
                onClick={handleBack}
                className="px-6 py-3 text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                &larr; Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={handleNext}
              disabled={!allCurrentAnswered}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                allCurrentAnswered
                  ? "bg-gold text-charcoal hover:bg-gold-light"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              {currentPage < totalPages - 1 ? "Next" : "Continue"} &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ─── CONTACT STAGE ─── */}
      {stage === "contact" && (
        <div>
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            One last step
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Where should we send your results?
          </h2>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            We&apos;ll review your answers and reach out within 24 hours with a
            personalised diagnostic.
          </p>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={contact.name}
                onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                WhatsApp number
              </label>
              <input
                id="whatsapp"
                type="text"
                value={contact.whatsapp}
                onChange={(e) => setContact((c) => ({ ...c, whatsapp: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all"
                placeholder="+254 7XX XXX XXX"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Business / Brand name
              </label>
              <input
                id="business"
                type="text"
                value={contact.business}
                onChange={(e) => setContact((c) => ({ ...c, business: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label htmlFor="sells" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                What do you sell? One sentence.
              </label>
              <input
                id="sells"
                type="text"
                value={contact.sells}
                onChange={(e) => setContact((c) => ({ ...c, sells: e.target.value }))}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all"
                placeholder="e.g. Online fitness coaching for busy professionals"
              />
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-3 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              &larr; Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={
                submitting ||
                !contact.name ||
                !contact.whatsapp ||
                !contact.business ||
                !contact.sells
              }
              className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all ${
                !submitting && contact.name && contact.whatsapp && contact.business && contact.sells
                  ? "bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_20px_rgba(198,164,78,0.3)]"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              {submitting ? "Submitting…" : "Get my diagnostic results"} &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ─── RESULT STAGE ─── */}
      {stage === "result" && (
        <div>
          {/* Level badge */}
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${colors.bg} ${colors.border} border mb-6`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${colors.badge}`} />
              <span className={`text-sm font-bold ${colors.text}`}>
                {levelLabel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Your diagnostic is ready.
            </h2>
          </div>

          {/* Description */}
          <div className={`p-6 rounded-xl ${colors.bg} border ${colors.border} mb-8`}>
            <p className="text-sm text-white/80 leading-relaxed">
              {levelDescriptions[level]}
            </p>
          </div>

          {/* Recommended components */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">
              Recommended components
            </h3>
            <div className="flex flex-wrap gap-2">
              {components.split(", ").map((comp) => (
                <span
                  key={comp}
                  className="px-3.5 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white/70"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Goal + Bandwidth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-1">
                Your goal
              </p>
              <p className="text-sm font-medium text-white">
                {answers.q9 ? getGoalLabel(answers.q9) : ""}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-1">
                Your bandwidth
              </p>
              <p className="text-sm font-medium text-white">
                {answers.q10 ? getBandwidthLabel(answers.q10) : ""}
              </p>
            </div>
          </div>

          {/* Score */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-8 text-center">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-1">
              Funnel readiness score
            </p>
            <p className={`text-3xl font-bold ${colors.text}`}>
              {score}<span className="text-base text-white/30">/40</span>
            </p>
          </div>

          {/* Closing */}
          <div className="text-center pt-4 border-t border-white/5">
            <p className="text-sm text-white/50">
              Results have been noted. Expect a WhatsApp message within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
