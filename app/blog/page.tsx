'use client';

import MegaMenuHeader from "@/components/MegaMenuHeader";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
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
  story: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=85",
};

const journalArticles = [
  ["Soft Living: Interiors Built for Belonging", images.article1, "Design"],
  ["Trending Modern Furniture Ideas in 2025", images.article2, "Inspiration"],
  ["Why Simple Furniture Design Looks Fabulous", images.article3, "Guide"],
  ["The Enduring Appeal of Natural Oak", images.hero, "Materials"],
  ["How to Create a Restful Bedroom", images.bedroom, "Spaces"],
  ["A Better Home Office in Five Steps", images.desk, "Practical"],
];

export default function BlogPage() {
  return (
    <div className="site-shell">
      <MegaMenuHeader />
      <main className="pt-20">
        <section className="editorial-hero section">
          <p className="eyebrow">The Furtinuer journal</p>
          <h1>
            <TypeMorph
              config={{
                text: "ANIMDOCK",
                target: "Notes on",
                morph: true,
                speed: { mode: 'static', value: 2 },
                variants: { mode: 'static', value: 15 },
                color: "#262720"
              }}
            />
            <br />
            Living Well
          </h1>
          <p>Stories about thoughtful spaces, enduring materials, and the people who make our homes more meaningful.</p>
        </section>
        <section className="featured-article section">
          <img src={images.living} alt="Calm, naturally lit living room" />
          <div>
            <p className="eyebrow">Featured story · 8 min read</p>
            <h2>The Art of Creating<br />a Room That Lasts</h2>
            <p>Designer Mara Vale shares a slower approach to interiors: choose less, notice more, and leave room for life to happen.</p>
            <a className="text-link" href="#articles">Read story <Arrow /></a>
          </div>
        </section>
        <section className="articles section" id="articles">
          <div className="section-heading"><div><p className="eyebrow">Ideas &amp; inspiration</p><h2>Latest Stories</h2></div></div>
          <div className="article-grid blog-grid">
            {journalArticles.map(([title, image, category]) => (
              <article key={title}>
                <a href="#article"><img src={image} alt="" /></a>
                <p>{category} · 6 min read</p>
                <h3><a href="#article">{title}</a></h3>
                <span>Simple ideas for creating a more restful, personal, and enduring home.</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
