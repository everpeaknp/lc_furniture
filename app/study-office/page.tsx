'use client';

import { useEffect, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import { api, Category } from "@/lib/api";

const images = {
  desk: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  dining: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80",
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  article3: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Room to think",
  title: "Study & Office",
  note: "Work, thoughtfully",
  story: "A productive room need not feel corporate. Natural finishes and practical forms make space for focus while staying connected to home.",
  products: [
    { name: "Arco Writing Desk", price: "Rs. 58,000", image: images.desk },
    { name: "Miro Task Chair", price: "Rs. 36,000", image: images.chair },
    { name: "Frame Shelving Unit", price: "Rs. 64,000", image: images.cabinet },
    { name: "Taper Console Desk", price: "Rs. 52,000", image: images.article3 },
    { name: "Studio Work Table", price: "Rs. 68,000", image: images.dining },
    { name: "Oak File Cabinet", price: "Rs. 32,000", image: images.kitchen },
    { name: "Cove Reading Chair", price: "Rs. 48,000", image: images.living },
    { name: "Dune Side Table", price: "Rs. 24,000", image: images.table },
    { name: "Executive Desk", price: "Rs. 85,000", image: images.desk },
    { name: "Standing Desk", price: "Rs. 65,000", image: images.article3 },
    { name: "L-Shaped Desk", price: "Rs. 72,000", image: images.dining },
    { name: "Ergonomic Chair", price: "Rs. 45,000", image: images.chair },
  ],
};

export default function StudyOfficePage() {
  const [categoryData, setCategoryData] = useState<Category | null>(null);

  useEffect(() => {
    api.getCategories()
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const studyCategory = data.results.find((cat) => cat.slug === 'study-office');
          if (studyCategory) {
            setCategoryData(studyCategory);
          }
        }
      })
      .catch((error) => {
        console.error('Failed to fetch category data:', error);
      });
  }, []);

  const displayStory = categoryData?.description || room.story;

  return (
    <div className="site-shell">
      <main>
        <CategoryProductGrid
          products={room.products}
          category="study-office"
          eyebrow={room.eyebrow}
          title={room.title}
        />
        <section className="room-story section">
          <img src={room.products[4].image} alt="" />
          <div>
            <p className="eyebrow">The room edit</p>
            <h2>{room.note}</h2>
            <p>{displayStory}</p>
            <a className="text-link" href="/contact">Talk to a designer <Arrow /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
