"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Self Guided Demo", href: "#demo" },
  { label: "Pricing", href: "/pricing" },
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
                src="/V2ParlayLogoNew.png"
                alt="Parlay"
                width={120}
                height={40}
                priority
              />
            ) : (
              <Image
                src="/ParlayLogoWhite_Green.png"
                alt="Parlay"
                width={120}
                height={40}
                priority
              />
            )}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              if (link.label === "Features" && pathname === "/pricing") {
                return (
                  <button
                    key="features-pricing"
                    onClick={() => window.dispatchEvent(new CustomEvent("parlay:show-comparison"))}
                    className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass} bg-transparent border-none cursor-pointer p-0`}
                  >
                    {link.label}
                  </button>
                );
              }
              if (link.label === "Self Guided Demo") {
                return (
                  <button
                    key="self-guided-demo"
                    onClick={() => window.dispatchEvent(new Event("parlay:open-demo"))}
                    className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass} bg-transparent border-none cursor-pointer p-0`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.label === "Features" ? featuresHref() : link.href}
                  className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://work.useparlay.app"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${linkClass}`}
            >
              Sign In
            </a>
            <button
              onClick={() => window.dispatchEvent(new Event("parlay:open-trial"))}
              className="font-inter text-sm font-semibold px-4 py-2 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
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
          {NAV_LINKS.map((link) => {
            if (link.label === "Features" && pathname === "/pricing") {
              return (
                <button
                  key="features-pricing-mobile"
                  onClick={() => { setMobileOpen(false); window.dispatchEvent(new CustomEvent("parlay:show-comparison")); }}
                  className="block w-full text-left px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              );
            }
            if (link.label === "Self Guided Demo") {
              return (
                <button
                  key="self-guided-demo-mobile"
                  onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event("parlay:open-demo")); }}
                  className="block w-full text-left px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.label === "Features" ? featuresHref() : link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://work.useparlay.app"
            className="block px-2 py-3 text-brand-secondary font-medium font-inter rounded-md hover:bg-brand-light hover:text-brand-primary transition-colors"
          >
            Sign In
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
