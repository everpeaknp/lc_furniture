import type { FurnitureProduct } from "@/lib/furnitureSearch";

export type Availability = "In stock" | "Low stock" | "Made to order";

export type CatalogProduct = Omit<FurnitureProduct, "image"> & {
  image: string;
  availability: Availability;
};

export const furnitureCatalog: CatalogProduct[] = [
  { id: "linen-lounge-sofa", name: "Linen Lounge Sofa", price: 95000, image: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=85", category: "Sofas", availability: "In stock" },
  { id: "noma-dining-chair", name: "Noma Dining Chair", price: 26000, image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80", category: "Chairs", availability: "In stock" },
  { id: "onda-coffee-table", name: "Onda Coffee Table", price: 45000, image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80", category: "Tables", availability: "In stock" },
  { id: "atelier-sideboard", name: "Atelier Sideboard", price: 72000, image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80", category: "Storage", availability: "Low stock" },
  { id: "cloud-boucle-chair", name: "Cloud Bouclé Chair", price: 54000, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80", category: "Chairs", availability: "In stock" },
  { id: "arco-writing-desk", name: "Arco Writing Desk", price: 58000, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80", category: "Tables", availability: "In stock" },
  { id: "forma-modular-sofa", name: "Forma Modular Sofa", price: 145000, image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80", category: "Sofas", availability: "Made to order" },
  { id: "fawn-bedside-table", name: "Fawn Bedside Table", price: 24000, image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80", category: "Tables", availability: "In stock" },
  { id: "luma-dining-table", name: "Luma Dining Table", price: 92000, image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=900&q=80", category: "Tables", availability: "In stock" },
  { id: "miro-lounge-chair", name: "Miro Lounge Chair", price: 48000, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80", category: "Chairs", availability: "Low stock" },
  { id: "oak-display-cabinet", name: "Oak Display Cabinet", price: 82000, image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80", category: "Storage", availability: "In stock" },
  { id: "cove-two-seat-sofa", name: "Cove Two Seat Sofa", price: 115000, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80", category: "Sofas", availability: "In stock" },
  { id: "taper-console", name: "Taper Console", price: 52000, image: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80", category: "Storage", availability: "Made to order" },
  { id: "dune-low-table", name: "Dune Low Table", price: 38000, image: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=900&q=80", category: "Tables", availability: "In stock" },
  { id: "marta-dining-chair", name: "Marta Dining Chair", price: 28000, image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=900&q=80", category: "Chairs", availability: "Low stock" },
  { id: "frame-shelving-unit", name: "Frame Shelving Unit", price: 64000, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80", category: "Storage", availability: "Made to order" },
];

export function formatProductPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-IN")}`;
}