"use client";

import { useState, useEffect } from "react";

export function HeroAnimation() {
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowConfirm((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Spend label */}
      <p className="text-[10px] text-white/20 uppercase tracking-[0.15em] mb-5">
        Same $5,000 ad spend
      </p>

      {/* Two phones */}
      <div className="flex items-start gap-5 sm:gap-7">
        {/* LEFT: Without a path */}
        <div className="flex flex-col items-center">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.12em] mb-2.5">
            Without a path
          </p>

          <div className="w-[150px] h-[265px] sm:w-[170px] sm:h-[300px] rounded-[24px] border-[1.5px] border-white/[0.06] bg-[#0f0f1a] overflow-hidden">
            <div className="h-[22px] flex items-center justify-center">
              <div className="w-10 h-[3px] rounded-full bg-white/10" />
            </div>
            <div className="flex-1 bg-white relative" style={{ height: "calc(100% - 22px)" }}>
              <div className="p-2 border-b border-charcoal/5 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span className="text-[8px] text-gray-400">yoursite.com</span>
              </div>
              <div className="p-2.5">
                <div className="h-1.5 bg-gray-200 rounded-full w-3/4 mb-1.5" />
                <div className="h-1.5 bg-gray-200 rounded-full w-1/2 mb-1.5" />
                <div className="h-1.5 bg-gray-200 rounded-full w-2/3 mb-3" />
                <div className="h-11 bg-gray-100 rounded-md mb-2.5" />
                <div className="h-1.5 bg-gray-200 rounded-full w-4/5 mb-1.5" />
                <div className="h-1.5 bg-gray-200 rounded-full w-2/5 mb-3" />
                <div className="h-5 bg-gray-200 rounded-md" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-[9px] text-red-400 animate-pulse">
                  &#8592; She leaves
                </span>
              </div>
            </div>
          </div>

          {/* Scatter dots */}
          <div className="relative h-11 w-[100px] mt-1 overflow-hidden">
            <span className="scatter-dot-1" />
            <span className="scatter-dot-2" />
            <span className="scatter-dot-3" />
          </div>

          <div className="text-center">
            <p className="text-[28px] font-medium text-white/15">3</p>
            <p className="text-[9px] text-white/10">buyers</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center" style={{ height: 300 }}>
          <span className="text-lg text-gold arrow-pulse">&#8594;</span>
        </div>

        {/* RIGHT: With a path */}
        <div className="flex flex-col items-center">
          <p className="text-[9px] text-gold uppercase tracking-[0.12em] mb-2.5">
            With a path
          </p>

          <div className="w-[150px] h-[265px] sm:w-[170px] sm:h-[300px] rounded-[24px] border-[1.5px] border-gold/15 bg-[#0f0f1a] overflow-hidden shadow-[0_0_30px_rgba(198,164,78,0.05)]">
            <div className="h-[22px] flex items-center justify-center">
              <div className="w-10 h-[3px] rounded-full bg-white/10" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "calc(100% - 22px)" }}>
              {/* State A: Page with proof */}
              <div
                className="absolute inset-0 bg-white transition-opacity duration-700"
                style={{ opacity: showConfirm ? 0 : 1 }}
              >
                <div className="p-2 border-b border-charcoal/5 flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-gold" />
                  <span className="text-[8px] text-charcoal font-medium">Your Brand</span>
                </div>
                <div className="p-2.5">
                  <p className="text-[10px] font-medium text-charcoal leading-tight mb-2">
                    She sees your proof.
                    <br />
                    She trusts you.
                  </p>
                  <div className="p-1.5 bg-cream rounded-md mb-1.5">
                    <div className="text-gold text-[7px] mb-0.5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p className="text-[8px] text-charcoal leading-snug">
                      &ldquo;Bought in 10 minutes.&rdquo;
                    </p>
                  </div>
                  <div className="p-1.5 bg-cream rounded-md mb-2.5">
                    <div className="text-gold text-[7px] mb-0.5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p className="text-[8px] text-charcoal leading-snug">
                      &ldquo;Showed proof before asking for money.&rdquo;
                    </p>
                  </div>
                  <div className="bg-gold text-charcoal text-center py-2 rounded-md text-[10px] font-medium">
                    Buy now
                  </div>
                </div>
              </div>

              {/* State B: Confirmation */}
              <div
                className="absolute inset-0 bg-charcoal flex flex-col items-center justify-center px-5 transition-opacity duration-700"
                style={{ opacity: showConfirm ? 1 : 0 }}
              >
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center mb-3">
                  <span className="text-base text-gold">&#10003;</span>
                </div>
                <p className="text-[13px] font-medium text-white text-center">
                  New buyer.
                </p>
                <p className="text-[9px] text-white/35 text-center mt-2 leading-relaxed">
                  She clicked.
                  <br />
                  She stayed.
                  <br />
                  She bought.
                </p>
              </div>
            </div>
          </div>

          {/* Flow dots */}
          <div className="relative h-11 w-[100px] mt-1 overflow-hidden">
            <span className="flow-dot flow-dot-1" />
            <span className="flow-dot flow-dot-2" />
            <span className="flow-dot flow-dot-3" />
            <span className="flow-dot flow-dot-4" />
            <span className="flow-dot flow-dot-5" />
          </div>

          <div className="text-center">
            <p className="text-[28px] font-medium text-gold">14</p>
            <p className="text-[9px] text-gold/50">buyers</p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-4">
        <p className="text-[11px] text-white/35">
          Same ad. Same budget. Same product.
        </p>
        <p className="text-[12px] text-gold font-medium mt-1">
          Different path after the click.
        </p>
      </div>
    </div>
  );
}
