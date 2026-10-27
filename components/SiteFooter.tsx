"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api, FooterLinkGroup } from "@/lib/api";

export default function SiteFooter() {
  const [footerData, setFooterData] = useState<FooterLinkGroup[] | null>(null);

  useEffect(() => {
    api.getFooter()
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setFooterData(data.results);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch footer:', error);
      });
  }, []);

  return (
    <>
      <div className="brand-strip">
        <span>ISO 9001:2015</span><b>WOODENSTREET</b><span>1 Million+ Customers</span><span>100+ Experience Stores</span><span>Free Delivery</span>
      </div>
      <footer>
        <div className="footer-about">
          <Link className="logo" href="/">WoodenStreet.</Link>
          <p>India's Premium Online Furniture Store. Experience the magic of custom crafted solid wood furniture designed for modern Indian homes.</p>
          <p>© 2024 Woodenstreet. All rights reserved.</p>
        </div>
        {footerData ? (
          footerData.map((group) => (
            <div key={group.id}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <Link key={link.id} href={link.url}>{link.label}</Link>
              ))}
            </div>
          ))
        ) : (
          <>
            <div>
              <h3>Top Categories</h3>
              <Link href="/living-room/sofas">Sofa Sets</Link>
              <Link href="/bedroom/king-size-beds">Wooden Beds</Link>
              <Link href="/dining/6-seater-dining">Dining Tables</Link>
              <Link href="/living-room/tv-units">TV Units</Link>
              <Link href="/bedroom/wardrobes">Wardrobes</Link>
            </div>
            <div>
              <h3>Our Company</h3>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/reviews">Customer Reviews</Link>
              <Link href="/stores">Experience Stores</Link>
              <Link href="/blog">WoodenStreet Blog</Link>
            </div>
          </>
        )}
        <div>
          <h3>Contact Us</h3>
          <p>+91-9314444747</p>
          <p>care@woodenstreet.com</p>
          <p style={{ marginTop: '8px' }}>
            Unit No. 1-2, First Floor, D-Block,<br/>
            Ganesh Meridian, S.G. Highway,<br/>
            Ahmedabad, Gujarat 380060
          </p>
        </div>
      </footer>
    </>
  );
}
