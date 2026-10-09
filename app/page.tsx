'use client';

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Truck, Store, Package, RotateCcw } from "lucide-react";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";
import { Hero } from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FestiveCountdown from "@/components/FestiveCountdown";

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
  { name: "Black Sofa Set", price: "Rs. 68,000", image: images.living },
  { name: "Circle Dining Table", price: "Rs. 54,000", image: images.dining },
  { name: "Minimal Sofa", price: "Rs. 42,000", image: images.sofa },
  { name: "Pattern Tea Table", price: "Rs. 32,000", image: images.table },
];

const trending = [
  { name: "A Vase Table", price: "Rs. 22,000", image: images.table },
  { name: "Vintage Sofa", price: "Rs. 65,000", image: images.chair },
  { name: "Home Chest", price: "Rs. 28,000", image: images.cabinet },
  { name: "Writing Table", price: "Rs. 34,000", image: images.desk },
];

const emailSchema = z.string().email('Please enter a valid email address');

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const subscribe = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setMessage("Thank you — your first look is on its way.");
    setEmail("");
  };

  return (
    <div className="site-shell">
      <MegaMenuHeader />

      <main id="top" className="pt-20">
        <FestiveCountdown />
          <Hero />

        <AnimatedSection className="benefits section" aria-label="Store benefits">
          {[
            [<Truck />, "Quick delivery", "Within 3–5 days"],
            [<Store />, "Pick up in store", "Free in-store pickup"],
            [<Package />, "Special packaging", "Beautifully protected"],
            [<RotateCcw />, "Returns policy", "30-day returns"],
          ].map(([icon, title, note], index) => (
            <motion.div
              className="benefit"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span>{icon}</span>
              <p><b>{title}</b><small>{note}</small></p>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="story section" id="about" delay={0.2}>
          <motion.div
            className="story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={images.story} alt="Comfortable neutral sofa" />
            <motion.button
              className="play"
              aria-label="Play our story video"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶
            </motion.button>
          </motion.div>
          <motion.div
            className="story-copy"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="collection section" id="shop" delay={0.3}>
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div><p className="eyebrow">Selected for you</p><h2>Our Featured Products</h2></div>
            <a href="/shop">Shop all <Arrow /></a>
          </motion.div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {featured.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto"
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </div>
          <div className="carousel-dots"><span className="active" /><span /><span /></div>
        </AnimatedSection>

        <AnimatedSection className="quote section" delay={0.4}>
          <motion.button
            aria-label="Previous review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Arrow direction="left" />
          </motion.button>
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>"</span>
            <p>
              Premium thought, honest materials and a quiet confidence. The pieces feel considered,
              but never precious — exactly how a home should be.
            </p>
            <cite>— Marina Ellis, London</cite>
          </motion.blockquote>
          <motion.button
            aria-label="Next review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Arrow />
          </motion.button>
        </AnimatedSection>

        <AnimatedSection className="rooms section" delay={0.5}>
          {[
            ["Living rooms", images.living, "/living-room"],
            ["Bedrooms", images.bedroom, "/bedroom"],
            ["Dining", images.kitchen, "/dining"],
          ].map(([name, image, href], index) => (
            <motion.a
              href={href}
              className="room"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <span>{name}</span>
              <img src={image} alt={`${name} furniture collection`} />
              <i><Arrow /></i>
            </motion.a>
          ))}
        </AnimatedSection>

        <AnimatedSection className="newsletter section" delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe now
              </motion.button>
            </form>
            {error && <p className="form-message" style={{ color: '#e53935' }}>{error}</p>}
            <p className="form-message" aria-live="polite" style={{ color: '#1e9e76' }}>{message}</p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="collection section" id="trending" delay={0.7}>
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div><p className="eyebrow">The current edit</p><h2>Trending Products</h2></div>
            <a href="/shop">Shop all <Arrow /></a>
          </motion.div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {trending.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto"
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </div>
          <div className="carousel-dots"><span className="active" /><span /><span /></div>
        </AnimatedSection>

        <AnimatedSection className="articles section" id="journal" delay={0.8}>
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div><p className="eyebrow">Notes on living well</p><h2>Read Our Articles</h2></div>
            <a href="#journal">See all articles <Arrow /></a>
          </motion.div>
          <div className="article-grid">
            {[
              ["Soft Living: Interiors Built for Belonging", images.article1, "Design"],
              ["Trending Modern Furniture Ideas in 2025", images.article2, "Inspiration"],
              ["Why Simple Furniture Design Looks Fabulous", images.article3, "Guide"],
            ].map(([title, image, category], index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <a href="#journal"><img src={image} alt="" /></a>
                <p>{category} · 6 min read</p>
                <h3><a href="#journal">{title}</a></h3>
                <span>Discover simple ways to make your space more restful, personal, and enduring.</span>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </main>

      <SiteFooter />
    </div>
  );
}
