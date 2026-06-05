"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Self Guided Demo", href: "#demo" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function featuresHref() {
    return pathname === "/pricing" ? "#feature-comparison" : "#features";
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = scrolled
    ? "text-brand-secondary hover:text-brand-primary"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {scrolled ? (
              <Image
                src="/ParlayLogoColor_New.png"
                alt="Parlay"
                width={120}
                height={40}
                priority
              />
            ) : (
              <Image
                src="/ParlayLogoWhite_New.png"
                alt="Parlay"
                width={120}
                height={40}
                priority
              />
            )}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Features */}
            {pathname === "/pricing" ? (
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("parlay:show-comparison"))}
                className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass} bg-transparent border-none cursor-pointer p-0`}
              >
                Features
              </button>
            ) : (
              <Link href={featuresHref()} className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}>
                Features
              </Link>
            )}

            {/* Self Guided Demo */}
            <button
              onClick={() => window.dispatchEvent(new Event("parlay:open-demo"))}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass} bg-transparent border-none cursor-pointer p-0`}
            >
              Self Guided Demo
            </button>

            {/* Request a Demo */}
            <Link href="/demo" className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}>
              Request a Demo
            </Link>

            {/* Pricing */}
            <Link href="/pricing" className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}>
              Pricing
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}>
              Contact Us
            </Link>

            {/* Sign In */}
            <a
              href="https://work.useparlay.app"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}
            >
              Sign In
            </a>

            {/* Score a Conference — teal unscrolled, navy scrolled */}
            <a
              href="/score"
              className="font-inter text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-lg"
              style={{
                color: scrolled ? "#223A5E" : "#34D399",
                border: `1px solid ${scrolled ? "rgba(34,58,94,0.4)" : "rgba(52,211,153,0.4)"}`,
              }}
            >
              Score a Conference
            </a>

            {/* Start Free Trial — teal unscrolled, navy scrolled */}
            <button
              onClick={() => window.dispatchEvent(new Event("parlay:open-trial"))}
              className="font-inter text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              style={{
                background: scrolled ? "#223A5E" : "#34D399",
                color: scrolled ? "#ffffff" : "#111827",
              }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line
                    x1="4" y1="4" x2="20" y2="20"
                    stroke={scrolled ? "#223A5E" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="20" y1="4" x2="4" y2="20"
                    stroke={scrolled ? "#223A5E" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="4" y1="6" x2="20" y2="6"
                    stroke={scrolled ? "#223A5E" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="4" y1="12" x2="20" y2="12"
                    stroke={scrolled ? "#223A5E" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="4" y1="18" x2="20" y2="18"
                    stroke={scrolled ? "#223A5E" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <div className="px-4 py-4 space-y-1">
          {/* Features */}
          {pathname === "/pricing" ? (
            <button
              onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent("parlay:show-comparison")); }}
              className="block w-full text-left px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Features
            </button>
          ) : (
            <Link
              href={featuresHref()}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
            >
              Features
            </Link>
          )}

          {/* Self Guided Demo */}
          <button
            onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event("parlay:open-demo")); }}
            className="block w-full text-left px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Self Guided Demo
          </button>

          {/* Request a Demo */}
          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
          >
            Request a Demo
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
          >
            Pricing
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
          >
            Contact Us
          </Link>

          {/* Sign In */}
          <a
            href="https://work.useparlay.app"
            className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
          >
            Sign In
          </a>

          {/* Score a Conference */}
          <a
            href="/score"
            className="block px-2 py-3 text-brand-teal font-medium font-inter rounded-md hover:bg-brand-light transition-colors"
          >
            Score a Conference
          </a>

          <div className="pt-2">
            <button
              onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event("parlay:open-trial")); }}
              className="block w-full text-center bg-brand-teal text-brand-charcoal font-inter font-semibold px-4 py-3 rounded-lg hover:bg-brand-glow transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
