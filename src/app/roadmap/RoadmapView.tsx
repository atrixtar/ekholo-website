"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const EKHOLO_WHATSAPP = "254788120047";

/* ─── PERSONALISATION LOGIC ─── */

interface RoadmapParams {
  dropoff: string;
  barrier: string;
  goal: string;
  bandwidth: string;
  components: string;
  business: string;
  name: string;
}

interface StepContent {
  number: number;
  title: string;
  explanation: string;
  bullets: string[];
  signal: string;
}

function generateRoadmapContent(params: RoadmapParams): StepContent[] {
  const { dropoff, barrier, goal, bandwidth, components, business } = params;
  const componentList = components.split(",").map((c) => c.trim().toLowerCase());
  const dropLower = dropoff.toLowerCase();
  const barrierLower = barrier.toLowerCase();
  const biz = business || "your business";

  // Step 1 — Fix the drop-off point
  let s1Explanation =
    "People show interest — then vanish. The leak is not the ad. It is the moment right after.";
  let s1Bullets: string[];
  let s1Signal: string;

  if (/dm|message|chat|whatsapp/i.test(dropLower)) {
    s1Explanation = `You said people drop off after they message you. That means the conversation between first message and next step is where ${biz} loses them.`;
    s1Bullets = [
      `Write a standard reply for ${biz} that acknowledges, qualifies, and gives one clear next step — within two messages.`,
      "Set a response-time target. If replies take more than an hour, she moves on.",
      "End every DM exchange with a specific action: a link, a date, or a question she has to answer.",
    ];
    s1Signal = "Your DM-to-next-step rate climbs. Fewer conversations end in silence.";
  } else if (/link|page|site|website|land/i.test(dropLower)) {
    s1Explanation = `You said people drop off when they hit the page. That means the landing experience for ${biz} is not doing its job — she arrives, looks around, and leaves.`;
    s1Bullets = [
      `Rewrite the first screen of your page so a stranger knows what ${biz} does, who it is for, and why it works — in under five seconds.`,
      "Remove anything that doesn't answer those three questions. Fewer elements, not more.",
      "Add one clear call to action above the fold. Don't make her scroll to find out what to do next.",
    ];
    s1Signal = "Time on page goes up. Bounce rate drops. More visitors reach the call to action.";
  } else if (/call|meeting|book|schedule/i.test(dropLower)) {
    s1Explanation = `You said people drop off around the call or meeting stage. That means ${biz} loses them between "interested" and "showed up."`;
    s1Bullets = [
      "Send a confirmation message within five minutes of the booking — with one reason to look forward to the call.",
      "Send a reminder the morning of with a short proof point or testimonial.",
      "If she doesn't show, follow up within an hour with a reschedule link. Don't wait.",
    ];
    s1Signal = "Your show-up rate increases. Fewer booked calls end as no-shows.";
  } else {
    s1Explanation = `You said people drop off here: "${dropoff}." That is where ${biz} leaks the most buyers.`;
    s1Bullets = [
      `Map the exact step where people leave ${biz}'s process and rebuild it with proof and a clear next action.`,
      "Remove friction — every extra click, every vague instruction, every moment of doubt costs you a buyer.",
      "Add a reason to continue at that exact point. A testimonial, a preview of what comes next, or a simple reassurance.",
    ];
    s1Signal =
      "Fewer people vanish at the point where you lose them most. The path past that step gets smoother.";
  }

  // Step 2 — Answer the hesitation
  let s2Explanation =
    "She is interested but something holds her back. That hesitation is not random — it is predictable, and it has an answer.";
  let s2Bullets: string[];
  let s2Signal: string;

  if (/price|cost|expensive|cheap|afford|money|budget/i.test(barrierLower)) {
    s2Explanation = `You believe they hesitate because of price. That usually means ${biz}'s page shows the cost before it shows the value.`;
    s2Bullets = [
      "Show what the buyer gets — in outcomes, not features — before she ever sees a number.",
      "Add a comparison: what does it cost her to NOT solve this problem? Make the price feel small next to the alternative.",
      `If ${biz} offers payment plans or guarantees, put them directly next to the price. Don't hide them on a separate page.`,
    ];
    s2Signal =
      "People who see the price start clicking 'buy' instead of closing the tab. The price objection fades.";
  } else if (/proof|trust|content|credib|believe|legit/i.test(barrierLower)) {
    s2Explanation = `You believe they hesitate because they don't see enough proof. That means ${biz} is asking for trust it hasn't earned yet.`;
    s2Bullets = [
      "Put your strongest testimonial or result above your call to action — not below it, not on a separate page.",
      "Use specifics: real names, real numbers, real timelines. Vague praise does nothing.",
      `If ${biz} has before-and-after results, screenshots, or video testimonials — they should be impossible to miss.`,
    ];
    s2Signal =
      "Visitors spend more time on the proof section. Conversion improves because she believes you before you ask.";
  } else if (/compet|vendor|option|alternative|other|compare/i.test(barrierLower)) {
    s2Explanation = `You believe they hesitate because they are comparing you to competitors. That means ${biz} hasn't made the difference clear enough.`;
    s2Bullets = [
      `Name what makes ${biz} different — not better in general, but specifically different in a way that matters to her.`,
      "Address the comparison directly. If competitors are cheaper, explain why. If they offer more, explain what they leave out.",
      "Show a result that a competitor cannot claim. One specific proof point beats ten generic claims.",
    ];
    s2Signal =
      "People stop asking 'why not the other option?' because the answer is already on the page.";
  } else {
    s2Explanation = `You believe they don't buy because: "${barrier}." That hesitation needs a direct answer — on the page, before she reaches the decision point.`;
    s2Bullets = [
      `Write the answer to that objection and place it on ${biz}'s page above the call to action.`,
      "Back the answer with proof — a testimonial, a case study, a number that makes the hesitation feel smaller.",
      "Test whether addressing it earlier in the page changes the outcome. Often the answer belongs higher than you think.",
    ];
    s2Signal =
      "The people who stay past step one now have a reason to move forward instead of a reason to hesitate.";
  }

  // Step 3 — Connect the pieces
  const hasLandingPage = componentList.some((c) => c.includes("landing page"));
  const hasDMScript = componentList.some(
    (c) => c.includes("dm") || c.includes("qualifying script"),
  );
  const goalLower = goal.toLowerCase();

  let s3Explanation = `Your goal is ${goal.toLowerCase()}, but each piece of ${biz}'s path was built in isolation. The ad says one thing, the page says another, and the follow-up says nothing.`;
  let s3Bullets: string[];

  if (hasLandingPage && hasDMScript) {
    s3Bullets = [
      `Connect the DM qualifying script to the landing page — the message she gets in DMs should set up what she sees on the page.`,
      `Make the landing page continue the story the ad started. Same language, same promise, same proof.`,
      `Wire the follow-up to reference what she already saw. Don't restart the conversation from zero.`,
    ];
  } else if (hasLandingPage) {
    s3Bullets = [
      `Rebuild the landing page so it continues the exact promise from the ad. Same words, same tone, same proof.`,
      `Add a follow-up step after the page — an email, a WhatsApp message, or a retarget — that picks up where she left off.`,
      `Review every transition point: ad → page → action → follow-up. Each handoff should feel like one conversation.`,
    ];
  } else if (hasDMScript) {
    s3Bullets = [
      `The DM qualifying script should lead to a specific next step — not a general "check out my page."`,
      `Whatever she sees after the DM conversation should reference what she already told you. Personalise the next touch.`,
      `Build a follow-up sequence for people who went quiet after the DM. One message, three days later, with a reason to re-engage.`,
    ];
  } else {
    s3Bullets = [
      `Review every transition in ${biz}'s path — from ad to page, page to checkout, checkout to follow-up.`,
      `Each step should carry the story forward. If the ad promises a result, the page proves it, and the checkout confirms it.`,
      `Remove any step that makes her start over. She should never have to re-learn who you are.`,
    ];
  }

  let s3Signal: string;
  if (/lead|inbound/i.test(goalLower)) {
    s3Signal =
      "Leads arrive warmer. They already know who you are and what you do by the time they reach out.";
  } else if (/conver/i.test(goalLower)) {
    s3Signal =
      "Conversion rate climbs because the path feels like one conversation, not five disconnected rooms.";
  } else {
    s3Signal =
      "The path from first click to sale feels seamless. Each piece hands the buyer to the next with the right context.";
  }

  // Step 4 — Measure and sharpen
  const bandwidthLower = bandwidth.toLowerCase();
  let s4Explanation: string;
  let s4Bullets: string[];
  let s4Signal: string;

  if (/diy|direction|self/i.test(bandwidthLower)) {
    s4Explanation =
      "You now have a connected path. The next step is a weekly habit: look at the numbers, find the weakest link, fix one thing.";
    s4Bullets = [
      "Set a fifteen-minute weekly check: where did people drop off this week? That is your one fix for the next week.",
      "Change one thing at a time. If you change three things and the number moves, you won't know which one worked.",
      "Write down what you tested and what happened. In a month you will have a playbook built from your own data.",
    ];
    s4Signal =
      "Every week, the path gets tighter. You build a personal playbook of what works for your specific audience.";
  } else if (/collaborat|together|alongside/i.test(bandwidthLower)) {
    s4Explanation =
      "You now have a connected path. The next step is reviewing it together — someone looking at the numbers with you, spotting what you'd miss alone.";
    s4Bullets = [
      "Schedule a weekly or biweekly review with your collaborator. One metric per session: where is the biggest leak right now?",
      "Test one change per cycle. Review the result together before moving to the next.",
      "Build a shared document of what you tested, what moved, and what didn't. It compounds over time.",
    ];
    s4Signal =
      "Every review cycle, the path improves. You make sharper decisions because you're not guessing alone.";
  } else {
    s4Explanation =
      "You now have a connected path. But you don't yet know which piece is the weakest link. Measurement turns guessing into knowing.";
    s4Bullets = [
      "Track where people drop off each week. The biggest drop is your highest-leverage fix.",
      "Test one change at a time. Keep the winner, kill the loser. Don't test everything at once.",
      "After four weeks of testing, you will know more about your buyers than most businesses learn in a year.",
    ];
    s4Signal =
      "Every week, the path gets tighter. The numbers climb without you rebuilding anything from scratch.";
  }

  return [
    {
      number: 1,
      title: "Fix the drop-off point",
      explanation: s1Explanation,
      bullets: s1Bullets,
      signal: s1Signal,
    },
    {
      number: 2,
      title: "Answer the hesitation",
      explanation: s2Explanation,
      bullets: s2Bullets,
      signal: s2Signal,
    },
    {
      number: 3,
      title: "Connect the pieces",
      explanation: s3Explanation,
      bullets: s3Bullets,
      signal: s3Signal,
    },
    {
      number: 4,
      title: "Measure and sharpen",
      explanation: s4Explanation,
      bullets: s4Bullets,
      signal: s4Signal,
    },
  ];
}

/* ─── ROADMAP VIEW ─── */

function RoadmapInner() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  const params: RoadmapParams = {
    dropoff: searchParams.get("dropoff") || "",
    barrier: searchParams.get("barrier") || "",
    goal: searchParams.get("goal") || "",
    bandwidth: searchParams.get("bandwidth") || "",
    components: searchParams.get("components") || "",
    business: searchParams.get("business") || "",
    name: searchParams.get("name") || "",
  };

  const hasData = !!(params.dropoff || params.barrier);
  const steps = hasData ? generateRoadmapContent(params) : null;

  const firstName = params.name.split(" ")[0] || "there";
  const totalSteps = 4;
  const showUpgrade = currentStep === totalSteps;

  if (!steps) {
    return (
      <div className="fixed inset-0 z-50 bg-charcoal overflow-y-auto flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            No roadmap data
          </p>
          <h1 className="text-2xl font-bold text-white mb-4">
            Start with the diagnostic.
          </h1>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            This page builds a personalised roadmap from your diagnostic
            answers. Take the diagnostic first and we&apos;ll send you here
            with your results.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-gold text-charcoal hover:bg-gold-light transition-all"
          >
            Take the diagnostic &rarr;
          </Link>
        </div>
      </div>
    );
  }

  function goTo(step: number) {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed inset-0 z-50 bg-charcoal text-white overflow-y-auto">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.2em] text-gold"
        >
          EKHOLO
        </Link>
      </header>

      <div className="px-6 pb-16 max-w-lg mx-auto">
        {/* Greeting */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-8">
          Your roadmap, {firstName}.
        </h1>

        {/* Progress dots */}
        <div className="flex items-center gap-3 mb-10">
          {Array.from({ length: totalSteps }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Step ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i < currentStep
                  ? "bg-gold"
                  : i === currentStep && !showUpgrade
                    ? "bg-gold scale-125"
                    : "bg-white/15"
              }`}
            />
          ))}
        </div>

        {/* Step cards — one at a time */}
        {!showUpgrade && steps[currentStep] && (
          <div>
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-2">
              Step {steps[currentStep].number} of {totalSteps}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              {steps[currentStep].title}
            </h2>

            <p className="text-sm text-white/70 leading-relaxed mb-8">
              {steps[currentStep].explanation}
            </p>

            {/* What this looks like */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-4">
                What this looks like
              </p>
              <ul className="space-y-3">
                {steps[currentStep].bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-white/70 leading-relaxed"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signal block */}
            <div className="p-5 rounded-xl bg-gold/[0.06] border border-gold/15 mb-10">
              <p className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-2">
                You will know it is working when
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {steps[currentStep].signal}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              {currentStep > 0 ? (
                <button
                  onClick={() => goTo(currentStep - 1)}
                  className="px-6 py-3 text-sm font-medium text-white/50 hover:text-white transition-colors"
                >
                  &larr; Previous
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={() => goTo(currentStep + 1)}
                className="px-8 py-3 rounded-full text-sm font-semibold bg-gold text-charcoal hover:bg-gold-light transition-all"
              >
                {currentStep < totalSteps - 1
                  ? "Next step"
                  : "See what’s next"}{" "}
                &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Upgrade screen */}
        {showUpgrade && (
          <div className="text-center pt-8">
            {/* All dots filled */}
            <div className="flex items-center justify-center gap-3 mb-10">
              {Array.from({ length: totalSteps }, (_, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full bg-gold"
                />
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              You have the roadmap.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-md mx-auto">
              Want it built with you instead of by you?
            </p>

            <a
              href={`https://wa.me/${EKHOLO_WHATSAPP}?text=${encodeURIComponent(
                `Hi, I completed the Ekholo roadmap for ${params.business || "my business"}. I'd like to talk about the done-with-you option.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_0_30px_rgba(198,164,78,0.3)] transition-all"
            >
              Talk to Ekholo &rarr;
            </a>

            <button
              onClick={() => goTo(0)}
              className="block mx-auto mt-6 text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Review the steps again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function RoadmapView() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 bg-charcoal flex items-center justify-center">
          <p className="text-white/30 text-sm">Loading your roadmap…</p>
        </div>
      }
    >
      <RoadmapInner />
    </Suspense>
  );
}
