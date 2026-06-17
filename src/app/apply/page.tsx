import type { Metadata } from "next";
import DiagnosticQuestionnaire from "./DiagnosticQuestionnaire";

export const metadata: Metadata = {
  title: "Apply for a Diagnostic",
  description:
    "Answer 10 questions. See exactly where people drop off between your ad and the sale — and which piece to fix first. You keep the diagnostic whether you hire us or not.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-charcoal text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            The Diagnostic
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find out exactly where it breaks.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
            Ten questions. Three minutes. You walk away knowing exactly where
            people drop off between your ad and the sale &mdash; which pieces
            work, which ones leak, and which one to fix first. The diagnostic
            is yours whether you hire us or not.
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
