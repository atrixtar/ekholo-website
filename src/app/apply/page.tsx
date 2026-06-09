import type { Metadata } from "next";
import DiagnosticQuestionnaire from "./DiagnosticQuestionnaire";

export const metadata: Metadata = {
  title: "Apply for a Diagnostic",
  description:
    "Answer 10 questions about your funnel. Get a personalised diagnostic showing exactly where it's breaking and what to fix first.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Funnel Diagnostic
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find out where your funnel is breaking.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
            10 questions. 3 minutes. You&apos;ll get a personalised diagnostic
            showing your funnel readiness level and exactly which components to
            build first.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <DiagnosticQuestionnaire />
        </div>
      </section>
    </>
  );
}
