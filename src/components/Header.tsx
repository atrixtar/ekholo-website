"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal/5"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3">
            <span
              className={`text-2xl font-bold tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-gold"
              }`}
            >
              EKHOLO
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/#how-it-works", label: "How It Works" },
              { href: "/pricing", label: "Pricing" },
              { href: "/case-studies", label: "Live Audits" },
              { href: "/blog", label: "Insights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate hover:text-charcoal"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Show Me Where It Breaks
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-charcoal/5"
      >
        <div className="px-6 py-4 space-y-3">
          {[
            { href: "/#how-it-works", label: "How It Works" },
            { href: "/pricing", label: "Pricing" },
            { href: "/case-studies", label: "Live Audits" },
            { href: "/blog", label: "Insights" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-slate hover:text-charcoal py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-6 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-full mt-2"
          >
            Show Me Where It Breaks
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
