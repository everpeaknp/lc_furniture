"use client";

import React from "react";
import Link from "next/link";
import "./WoodenStreetFooter.css";

const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
];

const FOOTER_GROUPS = [
  {
    title: "SHOP",
    links: [
      { label: "Living Room", href: "/living-room" },
      { label: "Bedroom", href: "/bedroom" },
      { label: "Dining", href: "/dining" },
      { label: "Study & Office", href: "/study-office" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const BRAND_NAME = "WOODENSTREET";

export function WoodenStreetFooter() {
  return (
    <footer className="woodenstreet-footer">
      <div className="woodenstreet-footer-inner">
        <nav
          className="woodenstreet-socials"
          aria-label="Social media links"
        >
          {SOCIALS.map((social) => (
            <a
              className="woodenstreet-social"
              href={social.href}
              key={social.label}
            >
              <span className="woodenstreet-social-name">
                {social.label}
              </span>

              <span
                className="woodenstreet-arrow"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="woodenstreet-columns">
          {FOOTER_GROUPS.map((group) => (
            <section
              className="woodenstreet-column"
              key={group.title}
            >
              <h2 className="woodenstreet-column-title">
                {group.title}
              </h2>

              <ul className="woodenstreet-link-list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="woodenstreet-footer-link"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div
        className="woodenstreet-brand-zone"
        aria-label={BRAND_NAME}
      >
        <div className="woodenstreet-brand-glow" />

        <p
          className="woodenstreet-brand"
          data-brand={BRAND_NAME}
          aria-hidden="true"
        >
          {BRAND_NAME}
        </p>
      </div>

      <div className="woodenstreet-footer-bar">
        <a href="mailto:hello@woodenstreet.com" className="woodenstreet-footer-email">hello@woodenstreet.com</a>
        <div className="woodenstreet-footer-links">
          <Link href="/privacy" className="woodenstreet-footer-small-link">Privacy policy</Link>
          <Link href="/terms" className="woodenstreet-footer-small-link">Terms & conditions</Link>
        </div>
        <span className="woodenstreet-footer-copyright">© 2025 WOODENSTREET</span>
      </div>
    </footer>
  );
}
