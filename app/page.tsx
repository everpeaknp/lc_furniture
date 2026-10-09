'use client';

import { FormEvent, useState } from "react";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";
import { Hero } from "@/components/Hero";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  story: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=85",
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  dining: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80",
  sofa: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  desk: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
  article1: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=900&q=80",
  article2: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=900&q=80",
  article3: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80",
};

const featured = [
  { name: "Black Sofa Set", price: "$800", image: images.living },
  { name: "Circle Dining Table", price: "$650", image: images.dining },
  { name: "Minimal Sofa", price: "$490", image: images.sofa },
  { name: "Pattern Tea Table", price: "$380", image: images.table },
];

const trending = [
  { name: "A Vase Table", price: "$260", image: images.table },
  { name: "Vintage Sofa", price: "$800", image: images.chair },
  { name: "Home Chest", price: "$350", image: images.cabinet },
  { name: "Writing Table", price: "$400", image: images.desk },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setMessage("Thank you — your first look is on its way.");
    setEmail("");
  };

  return (
    <div className="site-shell">
      <MegaMenuHeader />

      <main id="top" className="pt-20">
        <Hero />

        <section className="benefits section" aria-label="Store benefits">
          {[
            ["□", "Quick delivery", "Within 3–5 days"],
            ["▽", "Pick up in store", "Free in-store pickup"],
            ["◇", "Special packaging", "Beautifully protected"],
            ["↻", "Returns policy", "30-day returns"],
          ].map(([icon, title, note]) => (
            <div className="benefit" key={title}>
              <span>{icon}</span>
              <p><b>{title}</b><small>{note}</small></p>
            </div>
          ))}
        </section>

        <section className="story section" id="about">
          <div className="story-image">
            <img src={images.story} alt="Comfortable neutral sofa" />
            <button className="play" aria-label="Play our story video">▶</button>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Our story</p>
            <h2>Since 1990's</h2>
            <p>
              For over three decades we have designed timeless furniture for slower, more intentional
              living. Every piece begins with a practical need and ends with a form worth keeping.
            </p>
            <p>
              We work with responsible makers and enduring materials so each object can be lived with,
              marked by time, and passed on.
            </p>
            <a className="text-link" href="#journal">About us <Arrow /></a>
          </div>
        </section>

        <section className="collection section" id="shop">
          <div className="section-heading">
            <div><p className="eyebrow">Selected for you</p><h2>Our Featured Products</h2></div>
            <a href="/shop">Shop all <Arrow /></a>
          </div>
          <div className="product-grid">
            {featured.map((item) => <ProductCard item={item} key={item.name} />)}
          </div>
          <div className="carousel-dots"><span className="active" /><span /><span /></div>
        </section>

        <section className="quote section">
          <button aria-label="Previous review"><Arrow direction="left" /></button>
          <blockquote>
            <span>"</span>
            <p>
              Premium thought, honest materials and a quiet confidence. The pieces feel considered,
              but never precious — exactly how a home should be.
            </p>
            <cite>— Marina Ellis, London</cite>
          </blockquote>
          <button aria-label="Next review"><Arrow /></button>
        </section>

        <section className="rooms section">
          {[
            ["Living rooms", images.living, "/living-room"],
            ["Bedrooms", images.bedroom, "/bedroom"],
            ["Dining", images.kitchen, "/dining"],
          ].map(([name, image, href]) => (
            <a href={href} className="room" key={name}>
              <span>{name}</span>
              <img src={image} alt={`${name} furniture collection`} />
              <i><Arrow /></i>
            </a>
          ))}
        </section>

        <section className="newsletter section">
          <p className="eyebrow">The Furtinuer letter</p>
          <h2>Get Offers &amp; Discounts<br />by Subscribing Us</h2>
          <form onSubmit={subscribe}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe now</button>
          </form>
          <p className="form-message" aria-live="polite">{message}</p>
        </section>

        <section className="collection section" id="trending">
          <div className="section-heading">
            <div><p className="eyebrow">The current edit</p><h2>Trending Products</h2></div>
            <a href="/shop">Shop all <Arrow /></a>
          </div>
          <div className="product-grid">
            {trending.map((item) => <ProductCard item={item} key={item.name} />)}
          </div>
          <div className="carousel-dots"><span className="active" /><span /><span /></div>
        </section>

        <section className="articles section" id="journal">
          <div className="section-heading">
            <div><p className="eyebrow">Notes on living well</p><h2>Read Our Articles</h2></div>
            <a href="#journal">See all articles <Arrow /></a>
          </div>
          <div className="article-grid">
            {[
              ["Soft Living: Interiors Built for Belonging", images.article1, "Design"],
              ["Trending Modern Furniture Ideas in 2025", images.article2, "Inspiration"],
              ["Why Simple Furniture Design Looks Fabulous", images.article3, "Guide"],
            ].map(([title, image, category]) => (
              <article key={title}>
                <a href="#journal"><img src={image} alt="" /></a>
                <p>{category} · 6 min read</p>
                <h3><a href="#journal">{title}</a></h3>
                <span>Discover simple ways to make your space more restful, personal, and enduring.</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
