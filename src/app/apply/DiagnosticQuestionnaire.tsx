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
          { letter: "D", points: 4, text: "I have positioning, something free that captures contact info, and a way to collect details automatically." },
        ],
      },
    ],
  },
  {
    title: "What Happens After the Click",
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
          { letter: "C", points: 3, text: "Yes, but it’s basic. No testimonials, no explanation of why it works, no clear next step." },
          { letter: "D", points: 4, text: "Yes. It has proof, explains why the solution works, handles objections, and tells them exactly what to do next." },
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

function getLevel(score: number): { level: number; label: string } {
  if (score <= 16) return { level: 1, label: "Level 1 — Foundation missing" };
  if (score <= 24) return { level: 2, label: "Level 2 — People leave in the middle" };
  if (score <= 32) return { level: 3, label: "Level 3 — Economics broken" };
  return { level: 4, label: "Level 4 — Scaling problem" };
}

function getComponents(level: number): string {
  switch (level) {
    case 1:
      return "Positioning, Mechanism documentation, Social proof collection, Single offer page";
    case 2:
      return "Warm-up article or DM qualifying script, Testimonial documentation, Landing page with proof";
    case 3:
      return "Warm-up article, Sales page or sales video, Checkout cleanup, WhatsApp post-purchase sequence";
    case 4:
      return "WhatsApp commerce flow, Repeat-buyer path, Referral trigger, TikTok Live integration";
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
  1: "Before you build anything else, you need the foundation. Your immediate priority is proof, positioning, and a mechanism — the reason your solution works. Without these, sending more people to your page won’t change the bank account.",
  2: "You have an audience but people disappear somewhere between first contact and the sale. The fix is usually one missing piece — a qualifying step, a page with proof, or a clear next action. We’ll find it.",
  3: "The path from ad to sale exists but the numbers don’t work yet. You’re likely sending strangers straight to a page with no warm-up. A warm-up article, a stronger sales page, and a post-purchase sequence on WhatsApp will change that.",
  4: "The engine works. Now it needs systems so it runs without you in every conversation. Post-purchase follow-up, a repeat-buyer path, and referral triggers are where your next revenue jump lives.",
};

const EKHOLO_WHATSAPP = "25488120047";

/* ─── INTAKE CONFIG PER LEVEL ─── */
interface IntakeConfig {
  heading: string;
  subtitle: string;
  q1Label: string;
  q1Placeholder: string;
  q2Label: string;
  q2Placeholder: string;
  buttonLabel: string;
  whatsappText: (score: number, levelLabel: string) => string;
  upgradePrompt: string;
}

const intakeConfig: Record<number, IntakeConfig> = {
  1: {
    heading: "Two questions. Then your foundation checklist.",
    subtitle: "Tell us what you sell and what proof you have. We’ll build you a four-step plan to lay the groundwork.",
    q1Label: "What do you sell, in one sentence?",
    q1Placeholder: "e.g. Online fitness coaching for busy professionals...",
    q2Label: "What proof do you have right now that your solution works?",
    q2Placeholder: "e.g. A few happy clients but nothing documented anywhere...",
    buttonLabel: "Build my foundation plan",
    whatsappText: (score, label) =>
      `Hi, I just completed the Ekholo diagnostic. I scored ${score}/40 and landed at ${label}. I'd like help building the foundation.`,
    upgradePrompt: "Want someone to build this foundation with you?",
  },
  2: {
    heading: "Two questions. Then your four-step plan.",
    subtitle: "Tell us where people fall off and why you think they don’t buy. We’ll turn your answers into a concrete roadmap.",
    q1Label: "Where do interested people drop off in your process?",
    q1Placeholder: "e.g. They DM me, I send pricing, then I never hear back...",
    q2Label: "Why do you think they don’t end up buying?",
    q2Placeholder: "e.g. I think they don't see enough proof that it works...",
    buttonLabel: "Build my roadmap",
    whatsappText: (score, label) =>
      `Hi, I just completed the Ekholo diagnostic. I scored ${score}/40 and landed at ${label}. I'd like to talk about the done-with-you option.`,
    upgradePrompt: "Want this built with you rather than by you?",
  },
  3: {
    heading: "Two questions. Then your economics fix.",
    subtitle: "Tell us what each buyer costs and what each sale is worth. We’ll show you where the numbers break.",
    q1Label: "Roughly, what does it cost you to get one paying customer right now?",
    q1Placeholder: "e.g. About $120 in ad spend per sale, maybe more...",
    q2Label: "What is the average sale worth to you?",
    q2Placeholder: "e.g. $300 upfront, sometimes they come back for another $200...",
    buttonLabel: "Show me where the numbers break",
    whatsappText: (score, label) =>
      `Hi, I just completed the Ekholo diagnostic. I scored ${score}/40 and landed at ${label}. I'd like to talk about fixing the numbers.`,
    upgradePrompt: "Want us to fix these numbers with you?",
  },
  4: {
    heading: "Two questions. Then your scaling plan.",
    subtitle: "Tell us what still depends on you and where growth hits a wall. We’ll map the four steps to get past it.",
    q1Label: "What still needs you personally to run every day?",
    q1Placeholder: "e.g. I still close every sale myself, nothing is automated...",
    q2Label: "Where does growth stall when you push harder?",
    q2Placeholder: "e.g. When I increase ad spend the cost per buyer jumps and quality drops...",
    buttonLabel: "Build my scaling plan",
    whatsappText: (score, label) =>
      `Hi, I just completed the Ekholo diagnostic. I scored ${score}/40 and landed at ${label}. I'd like to talk about scaling.`,
    upgradePrompt: "Want us to build the systems that let you step back?",
  },
};

/* ─── ROADMAP GENERATOR ─── */
interface RoadmapStep {
  number: number;
  label: string;
  diagnosis: string;
  action: string;
  outcome: string;
}

function generateRoadmap(
  level: number,
  q1: string,
  q2: string,
  componentsList: string[],
  goalLabel: string,
): RoadmapStep[] {
  const a1 = q1.trim();
  const a2 = q2.trim();

  if (level === 1) {
    return [
      {
        number: 1,
        label: "Write your positioning",
        diagnosis: `You sell: "${a1}." Before a stranger gives you money, she needs to understand — in one sentence — why your version is different from every other option she's seen today.`,
        action: "Write one sentence that says what you do, who it's for, and why it works. Put it at the top of your page.",
        outcome: "A stranger reads your page and knows within five seconds whether this is for her.",
      },
      {
        number: 2,
        label: "Document the mechanism",
        diagnosis: `You need to explain why your solution works — not just what it does. The "why" is what separates you from the competitor she's also considering.`,
        action: componentsList[1]
          ? `Build ${componentsList[1].toLowerCase()} — a short explanation of the method behind your results.`
          : "Write a short explanation of the method or process behind your results. Name it. Make it yours.",
        outcome: "When she reads this, she thinks: 'This person actually knows how it works — not just what to sell me.'",
      },
      {
        number: 3,
        label: "Collect and display proof",
        diagnosis: `You said your current proof is: "${a2}." That's not enough for a stranger to trust you with her money.`,
        action: componentsList[2]
          ? `Start ${componentsList[2].toLowerCase()} — screenshots, before/afters, short quotes from real buyers.`
          : "Ask your three best customers for a screenshot, a short quote, or a before/after. Put them on the page above the price.",
        outcome: "The next person who lands on your page sees evidence before she sees an ask.",
      },
      {
        number: 4,
        label: "Build one offer page",
        diagnosis: "Right now you're sending people to a general page or explaining things over chat. That splits her attention.",
        action: componentsList[3]
          ? `Create a ${componentsList[3].toLowerCase()} with your positioning, mechanism, proof, and one clear action.`
          : "Build one page that has your positioning at the top, your mechanism in the middle, your proof below it, and one button at the bottom.",
        outcome: "Every person you send traffic to lands in one place that does one job: make her believe, then ask for the sale.",
      },
    ];
  }

  if (level === 2) {
    return [
      {
        number: 1,
        label: "Fix the drop-off point",
        diagnosis: `You said people drop off here: "${a1}." That is where the leak sits.`,
        action: componentsList[0]
          ? `Build a ${componentsList[0].toLowerCase()} that catches them at that exact moment.`
          : "Map the exact page or step where they leave and rebuild it with proof and a clear next step.",
        outcome: "Fewer people vanish at the point where you lose them most.",
      },
      {
        number: 2,
        label: "Answer the hesitation",
        diagnosis: `You believe they don't buy because: "${a2}." That hesitation needs a direct answer on the page.`,
        action: componentsList[1]
          ? `Use ${componentsList[1].toLowerCase()} to address that objection before they reach the decision point.`
          : "Write the answer to that objection and place it above your call to action — proof first, ask second.",
        outcome: "The people who stay past step one now have a reason to move forward instead of a reason to hesitate.",
      },
      {
        number: 3,
        label: "Connect the pieces",
        diagnosis: `Your goal is "${goalLabel.toLowerCase()}," but each piece of your path was built in isolation.`,
        action: componentsList[2]
          ? `Wire a ${componentsList[2].toLowerCase()} so that each stage hands the buyer to the next with the right context.`
          : "Review every transition — ad to page, page to checkout, checkout to follow-up — and make sure each one carries the story forward.",
        outcome: "The path from first click to sale feels like one conversation, not five disconnected rooms.",
      },
      {
        number: 4,
        label: "Measure and sharpen",
        diagnosis: "You now have a connected path. But you don't yet know which piece is the weakest link.",
        action: "Track where people drop off each week. Test one change at a time. Keep the winner, kill the loser.",
        outcome: "Every week, the path gets tighter. The numbers climb without you rebuilding anything from scratch.",
      },
    ];
  }

  if (level === 3) {
    return [
      {
        number: 1,
        label: "Warm up the stranger",
        diagnosis: `You're spending "${a1}" to get each buyer but sending them straight to a sales page. A stranger who just clicked an ad isn't ready to buy yet.`,
        action: componentsList[0]
          ? `Build a ${componentsList[0].toLowerCase()} — a short piece that sits between the ad and the sales page, teaches something useful, and earns trust before the ask.`
          : "Write a short article that teaches the reader something useful, names the problem she feels, and walks her toward your solution. Put it between the ad and the sales page.",
        outcome: "She arrives at your sales page already nodding instead of cold and suspicious.",
      },
      {
        number: 2,
        label: "Rebuild the sales page around proof",
        diagnosis: `Each sale is worth "${a2}" to you. If the cost to get that sale is eating most of that, the sales page isn't convincing enough.`,
        action: componentsList[1]
          ? `Rebuild with a ${componentsList[1].toLowerCase()} — structure it around why your solution works, backed by evidence, not just a list of features.`
          : "Rewrite the page around one question: why does your solution work when others don't? Every line answers that. Every proof point lands at the right moment.",
        outcome: "More of the people who read the page decide to buy. The cost per buyer drops because the page does more of the selling.",
      },
      {
        number: 3,
        label: "Clean up the checkout",
        diagnosis: "Some people decide to buy but never finish paying. Every extra step, every distraction, every moment of doubt between 'yes' and 'done' loses you money.",
        action: componentsList[2]
          ? `Run a ${componentsList[2].toLowerCase()} — strip distractions, remove unnecessary fields, and keep the trust alive from the sales page all the way to the confirmation screen.`
          : "Remove every unnecessary step between 'add to cart' and 'payment confirmed.' Keep the proof visible. Don't introduce new doubts after she already said yes.",
        outcome: "The people who decide to buy actually finish buying. You stop losing sales at the last step.",
      },
      {
        number: 4,
        label: "Follow up after the sale",
        diagnosis: "A customer who just bought is the warmest person in your world. Most businesses ignore her until they need another sale.",
        action: componentsList[3]
          ? `Build a ${componentsList[3].toLowerCase()} — a series of messages after the purchase that asks how it went, offers the next thing, and asks for a referral.`
          : "Write a sequence of three to five WhatsApp or email messages that go out after purchase: a thank-you, a check-in, a repeat offer, and a referral ask.",
        outcome: "Buyers come back without you chasing them. Each new customer is worth more because she buys again and sends others.",
      },
    ];
  }

  // Level 4
  return [
    {
      number: 1,
      label: "Systemise the bottleneck",
      diagnosis: `You said this still needs you personally: "${a1}." That is the ceiling on your growth — the business can't grow past what you can handle in a day.`,
      action: "Document the exact steps you take, then build a sequence (automated messages, a trained team member, or a tool) that handles it without you.",
      outcome: "The thing that required your hands now runs on its own. You get hours back every week.",
    },
    {
      number: 2,
      label: "Build the repeat-buyer path",
      diagnosis: "You already paid to acquire these customers. Getting them to buy again costs almost nothing — but only if you ask at the right time with the right offer.",
      action: componentsList[1]
        ? `Build a ${componentsList[1].toLowerCase()} — a post-purchase sequence that offers the next thing at the moment she's happiest with the last thing.`
        : "Map the natural next purchase for your best customers. Build a message sequence that offers it 7, 14, and 30 days after the first sale.",
      outcome: "Revenue goes up without ad spend going up. Each customer becomes worth two or three times what she was worth on day one.",
    },
    {
      number: 3,
      label: "Turn buyers into referral triggers",
      diagnosis: `You said growth stalls here: "${a2}." One of the fastest ways past that wall is making your existing buyers bring you new ones.`,
      action: componentsList[2]
        ? `Set up a ${componentsList[2].toLowerCase()} — a prompt that fires after a positive experience and gives her a reason to send a friend.`
        : "After a customer has a win, send her a message that says: 'Know anyone else who needs this? Send them this link.' Make it easy. Give her a reason.",
      outcome: "New customers arrive pre-sold because someone they trust already vouched for you. Your cost to acquire them is nearly zero.",
    },
    {
      number: 4,
      label: "Expand the channels",
      diagnosis: "The engine works on one channel. Scaling means running the same proven path across a second and third channel — not reinventing everything.",
      action: componentsList[3]
        ? `Add ${componentsList[3].toLowerCase()} — use the same proof, the same warm-up, the same sales page, adapted to the new platform's format.`
        : "Take the path that already works — the warm-up, the sales page, the follow-up — and adapt it for one more channel. Same story, different stage.",
      outcome: "Growth compounds because every new channel feeds the same proven path. You're not starting from scratch — you're multiplying what already works.",
    },
  ];
}

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
  // Roadmap state (all levels)
  const [roadmapStage, setRoadmapStage] = useState<"idle" | "intake" | "display">("idle");
  const [intakeQ1, setIntakeQ1] = useState("");
  const [intakeQ2, setIntakeQ2] = useState("");

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
      await fetch("/api/submit-diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Show result regardless of submission success
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
            Before we hand you the results —
          </h2>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            Someone on our team is going to read every answer you just gave.
            Not a bot. A person who&apos;s going to look at your business,
            think about it, and reach out within 24 hours with something
            worth your time.
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
          {/* ── Intake form (all levels) ── */}
          {roadmapStage === "intake" && (
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Build your roadmap
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {intakeConfig[level].heading}
              </h2>
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
                {intakeConfig[level].subtitle}
              </p>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="intake-q1"
                    className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2"
                  >
                    {intakeConfig[level].q1Label}
                  </label>
                  <textarea
                    id="intake-q1"
                    value={intakeQ1}
                    onChange={(e) => setIntakeQ1(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all resize-none"
                    placeholder={intakeConfig[level].q1Placeholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="intake-q2"
                    className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2"
                  >
                    {intakeConfig[level].q2Label}
                  </label>
                  <textarea
                    id="intake-q2"
                    value={intakeQ2}
                    onChange={(e) => setIntakeQ2(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all resize-none"
                    placeholder={intakeConfig[level].q2Placeholder}
                  />
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setRoadmapStage("idle")}
                  className="px-6 py-3 text-sm font-medium text-white/50 hover:text-white transition-colors"
                >
                  &larr; Back to results
                </button>
                <button
                  onClick={() => {
                    setRoadmapStage("display");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={!intakeQ1.trim() || !intakeQ2.trim()}
                  className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all ${
                    intakeQ1.trim() && intakeQ2.trim()
                      ? "bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_20px_rgba(198,164,78,0.3)]"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {intakeConfig[level].buttonLabel} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ── Generated roadmap (all levels) ── */}
          {roadmapStage === "display" && (
            <div>
              <div className="text-center mb-10">
                <div
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${colors.bg} ${colors.border} border mb-6`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.badge}`} />
                  <span className={`text-sm font-bold ${colors.text}`}>
                    {levelLabel}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Your four-step roadmap.
                </h2>
                <p className="mt-3 text-sm text-white/50">
                  Built from your answers. Each step hands you to the next.
                </p>
              </div>

              <div className="space-y-6">
                {generateRoadmap(
                  level,
                  intakeQ1,
                  intakeQ2,
                  components.split(", "),
                  answers.q9 ? getGoalLabel(answers.q9) : "",
                ).map((step) => (
                  <div
                    key={step.number}
                    className="p-6 rounded-xl bg-white/[0.05] border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        Step {step.number} &mdash; {step.label}
                      </h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed mb-2">
                      {step.diagnosis}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-2">
                      <span className="text-gold font-semibold">Action:</span>{" "}
                      {step.action}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed italic">
                      {step.outcome}
                    </p>
                  </div>
                ))}
              </div>

              {/* Upgrade prompt */}
              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <p className="text-sm text-white/40 mb-6 leading-relaxed">
                  {intakeConfig[level].upgradePrompt}
                  <br />
                  That is what Ekholo does.
                </p>
                <a
                  href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                    intakeConfig[level].whatsappText(score, levelLabel)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_20px_rgba(198,164,78,0.3)] transition-all"
                >
                  Talk to Ekholo &rarr;
                </a>
              </div>

              {/* Score */}
              <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-1">
                  Readiness score
                </p>
                <p className={`text-3xl font-bold ${colors.text}`}>
                  {score}<span className="text-base text-white/30">/40</span>
                </p>
              </div>

              {/* Closing */}
              <div className="text-center pt-4 mt-8 border-t border-white/5">
                <p className="text-sm text-white/50">
                  Your answers are sitting on someone&apos;s desk right now. Not in a queue. On a desk. Expect a WhatsApp message within 24 hours from a person who&apos;s actually read them.
                </p>
              </div>
            </div>
          )}

          {/* ── Standard result screen (all levels when roadmapStage is idle) ── */}
          {roadmapStage === "idle" && (
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

              {/* Build my roadmap button (all levels) */}
              <div className="mb-8">
                <button
                  onClick={() => {
                    setIntakeQ1("");
                    setIntakeQ2("");
                    setRoadmapStage("intake");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full px-8 py-4 rounded-full text-sm font-semibold bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_20px_rgba(198,164,78,0.3)] transition-all"
                >
                  {intakeConfig[level].buttonLabel} &rarr;
                </button>
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
                  Readiness score
                </p>
                <p className={`text-3xl font-bold ${colors.text}`}>
                  {score}<span className="text-base text-white/30">/40</span>
                </p>
              </div>

              {/* Closing */}
              <div className="text-center pt-4 border-t border-white/5">
                <p className="text-sm text-white/50">
                  Your answers are sitting on someone&apos;s desk right now. Not in a queue. On a desk. Expect a WhatsApp message within 24 hours from a person who&apos;s actually read them.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
