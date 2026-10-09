'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "./Arrow";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  dining: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
};

export default function SiteHeader({ border = false }: { border?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={border ? "header catalog-header" : "header"}>
      <Link className="logo" href="/">Furtinuer.</Link>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <div className="shop-nav-item">
          <Link className={pathname === "/living-room" ? "current" : ""} href="/living-room">
            Living Room <span className="nav-chevron">⌄</span>
          </Link>
          <div className="mega-menu">
            <div className="mega-links">
              <p>Living room furniture</p>
              <Link href="/living-room">Sofas <span>12</span></Link>
              <Link href="/living-room">Lounge chairs <span>18</span></Link>
              <Link href="/living-room">Coffee tables <span>14</span></Link>
              <Link href="/living-room">Media &amp; storage <span>09</span></Link>
              <Link href="/shop">View all furniture <Arrow /></Link>
            </div>
            <div className="mega-links">
              <p>Shop by room</p>
              <Link href="/bedroom">Bedroom</Link>
              <Link href="/dining">Dining</Link>
              <Link href="/study-office">Study &amp; Office</Link>
              <Link href="/living-room">The Natural Edit</Link>
              <Link href="/living-room">Small Spaces</Link>
            </div>
            <Link className="mega-feature" href="/living-room">
              <img src={images.chair} alt="Curved lounge chair in a warm interior" />
              <span><b>The art of sitting</b>Discover lounge chairs <Arrow /></span>
            </Link>
            <Link className="mega-feature" href="/dining">
              <img src={images.hero} alt="Wooden dining table collection" />
              <span><b>Gather around</b>Explore dining tables <Arrow /></span>
            </Link>
            <div className="mega-footer">
              <span>Complimentary delivery over $500</span>
              <Link href="/contact">Book a design consultation <Arrow /></Link>
              <Link href="/#about">Our materials <Arrow /></Link>
            </div>
          </div>
        </div>
        <Link className={pathname === "/bedroom" ? "current" : ""} href="/bedroom">Bedroom</Link>
        <Link className={pathname === "/dining" ? "current" : ""} href="/dining">Dining</Link>
        <Link className={pathname === "/study-office" ? "current" : ""} href="/study-office">Study &amp; Office</Link>
        <Link className={pathname === "/blog" ? "current" : ""} href="/blog">Blog</Link>
        <Link className={pathname === "/contact" ? "current" : ""} href="/contact">Contact</Link>
      </nav>
      <div className="header-tools">
        <button aria-label="Search">⌕</button>
        <button aria-label="Shopping bag">Bag <sup>0</sup></button>
      </div>
    </header>
  );
}
