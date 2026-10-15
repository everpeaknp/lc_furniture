import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

import { notFound } from "next/navigation";

// Realistic data for the mega menu subcategories
const subcategoryData: Record<string, { hero: string, intro: string, products: Array<{ name: string; price: string; image: string }> }> = {
  "sofas": {
    hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    intro: "Our sofas are designed for maximum comfort and timeless appeal. Discover everything from minimalist profiles to deep, sink-in lounge styles.",
    products: [
      { name: "Cove Two Seat Sofa", price: "Rs. 1,15,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Linen Lounge Sofa", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80" },
      { name: "Forma Modular Sofa", price: "Rs. 1,45,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
      { name: "Cloud Bouclé Sofa", price: "Rs. 1,60,000", image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "recliners": {
    hero: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1200&q=85",
    intro: "Experience ultimate relaxation with our premium recliners. Featuring smooth mechanisms, ergonomic support, and luxurious upholstery for the perfect lounging experience.",
    products: [
      { name: "Classic Recliner", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80" },
      { name: "Power Recliner", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Leather Recliner", price: "Rs. 1,25,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Swivel Recliner", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "queen-size-beds": {
    hero: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    intro: "Discover our collection of queen-size beds designed for comfort and style. Perfect for master bedrooms, these beds offer generous sleeping space with elegant designs.",
    products: [
      { name: "Mara Oak Bed", price: "Rs. 1,42,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Upholstered Queen Bed", price: "Rs. 1,25,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
      { name: "Platform Queen Bed", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Storage Queen Bed", price: "Rs. 1,15,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "king-size-beds": {
    hero: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    intro: "Experience ultimate luxury with our king-size beds. Designed for spacious master bedrooms, these beds offer expansive sleeping space with premium materials and elegant craftsmanship.",
    products: [
      { name: "Mara Oak King Bed", price: "Rs. 1,65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Upholstered King Bed", price: "Rs. 1,45,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
      { name: "Platform King Bed", price: "Rs. 1,15,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Storage King Bed", price: "Rs. 1,35,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "wardrobes": {
    hero: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85",
    intro: "Organize your bedroom with our stylish wardrobes. From spacious sliding doors to elegant hinged designs, find the perfect storage solution for your clothing and accessories.",
    products: [
      { name: "Arc Wardrobe", price: "Rs. 1,05,000", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Wardrobe", price: "Rs. 1,25,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Sliding Door Wardrobe", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Walk-in Wardrobe", price: "Rs. 1,85,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "dressers": {
    hero: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=1200&q=85",
    intro: "Complete your bedroom with our elegant dressers. Featuring multiple drawers and beautiful finishes, these pieces provide essential storage while enhancing your decor.",
    products: [
      { name: "Noma Dresser", price: "Rs. 74,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Dresser", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Modern Dresser", price: "Rs. 82,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Vintage Dresser", price: "Rs. 58,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "chest-of-drawers": {
    hero: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    intro: "Maximize your storage with our chest of drawers. Perfect for bedrooms, hallways, or nurseries, these versatile pieces offer organized storage in a compact footprint.",
    products: [
      { name: "Chest of Drawers", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Tall Chest", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Wide Chest", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Compact Chest", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "coffee-tables": {
    hero: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85",
    intro: "Anchor your living room with our collection of coffee tables. Crafted from solid wood, travertine, and glass to suit any space.",
    products: [
      { name: "Onda Coffee Table", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80" },
      { name: "Dune Low Table", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
      { name: "Nero Marble Table", price: "Rs. 74,000", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Round Table", price: "Rs. 26,000", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "4-seater-dining": {
    hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1200&q=85",
    intro: "Gather family and friends around our 4-seater dining tables. Perfect for intimate meals and everyday dining, these tables combine style with practicality.",
    products: [
      { name: "Luma Dining Table", price: "Rs. 92,000", image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak 4-Seater", price: "Rs. 78,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Round 4-Seater", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Glass 4-Seater", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "dining-chairs": {
    hero: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=1200&q=85",
    intro: "Complete your dining set with our stylish dining chairs. From ergonomic designs to elegant styles, find the perfect seating for your dining room.",
    products: [
      { name: "Noma Dining Chair", price: "Rs. 26,000", image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80" },
      { name: "Marta Dining Chair", price: "Rs. 28,000", image: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80" },
      { name: "Cane Armchair", price: "Rs. 32,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Upholstered Chair", price: "Rs. 35,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "6-seater-dining": {
    hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1200&q=85",
    intro: "Host memorable dinner parties with our 6-seater dining tables. Designed for larger families and entertaining, these tables offer spacious seating without compromising on style.",
    products: [
      { name: "Oval Extension Table", price: "Rs. 1,18,000", image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak 6-Seater", price: "Rs. 1,05,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Rectangular 6-Seater", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Glass 6-Seater", price: "Rs. 1,25,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "bench-seating": {
    hero: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=1200&q=85",
    intro: "Add versatility to your dining space with our bench seating. Perfect for accommodating extra guests or creating a casual dining atmosphere, benches offer flexible seating solutions.",
    products: [
      { name: "Linen Bench", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Dining Bench", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Upholstered Bench", price: "Rs. 48,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Storage Bench", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "8-seater-dining": {
    hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1200&q=85",
    intro: "Elevate your hosting with our 8-seater dining tables. Designed for grand dining rooms and entertaining large groups, these tables make a statement while providing ample seating.",
    products: [
      { name: "Grand Extension Table", price: "Rs. 1,85,000", image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak 8-Seater", price: "Rs. 1,65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Marble 8-Seater", price: "Rs. 2,15,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Glass 8-Seater", price: "Rs. 1,95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "bookshelves": {
    hero: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1200&q=85",
    intro: "Display your treasured objects and library with our open shelving units and bookcases, blending utility with sculptural design.",
    products: [
      { name: "Arch Bookshelf", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Linear Wall Shelf", price: "Rs. 24,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Walnut Cabinet", price: "Rs. 89,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Gallery Shelving", price: "Rs. 56,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "console-tables": {
    hero: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85",
    intro: "Elegant console tables that add sophistication to entryways, hallways, and living spaces. Perfect for displaying decor and creating stylish focal points.",
    products: [
      { name: "Taper Console", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
      { name: "Marble Console", price: "Rs. 78,000", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Console Table", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80" },
      { name: "Floating Console", price: "Rs. 62,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "display-units": {
    hero: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=85",
    intro: "Showcase your cherished possessions with our display units and cabinets. Featuring glass doors, adjustable shelves, and elegant designs perfect for any living room.",
    products: [
      { name: "Oak Display Cabinet", price: "Rs. 82,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Glass Display Unit", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80" },
      { name: "Modern Showcase", price: "Rs. 1,15,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Wall Display Unit", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "tv-units": {
    hero: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=85",
    intro: "Complete your entertainment setup with our stylish TV units. Designed to accommodate modern screens while providing storage for media equipment and decor.",
    products: [
      { name: "Oak TV Unit", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Modern TV Console", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Floating TV Unit", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Low Profile TV Stand", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "patio-furniture": {
    hero: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85",
    intro: "Transform your patio into an outdoor living room with our weather-resistant dining sets, loungers, and seating. Built to withstand the elements while maintaining style.",
    products: [
      { name: "Patio Dining Set", price: "Rs. 1,45,000", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80" },
      { name: "Aluminum Bistro Set", price: "Rs. 55,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Teak Coffee Table", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Outdoor Sectional", price: "Rs. 1,85,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "garden-chairs": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    intro: "Relax in style with our garden chairs and loungers. From classic Adirondack to modern armchairs, find the perfect seating for your garden or balcony.",
    products: [
      { name: "Garden Lounge Chair", price: "Rs. 35,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Sun Lounger", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Adirondack Chair", price: "Rs. 28,000", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80" },
      { name: "Garden Bench", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "outdoor-tables": {
    hero: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85",
    intro: "Bring people together outdoors with weather-resistant dining and occasional tables designed for patios, gardens, and balconies.",
    products: [
      { name: "Patio Dining Table", price: "Rs. 1,45,000", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" },
      { name: "Aluminum Bistro Table", price: "Rs. 55,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Teak Coffee Table", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80" },
      { name: "Garden Side Table", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "parasols": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    intro: "Add shade and comfort to your outdoor space with practical parasols and accessories made for sunny afternoons.",
    products: [
      { name: "Garden Parasol", price: "Rs. 28,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80" },
      { name: "Cantilever Parasol", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" },
      { name: "Parasol Base", price: "Rs. 18,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Balcony Parasol", price: "Rs. 24,000", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "swings": {
    hero: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85",
    intro: "Add charm and relaxation to your outdoor space with our swings and hammocks. Perfect for lazy afternoons and peaceful evenings in your garden or patio.",
    products: [
      { name: "Outdoor Swing", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80" },
      { name: "Hammock Chair", price: "Rs. 18,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: "Garden Swing Set", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" },
      { name: "Porch Swing", price: "Rs. 62,000", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "memory-foam": {
    hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    intro: "Experience unparalleled comfort with our memory foam mattresses. Contouring to your body for personalized support and pressure relief, these mattresses provide the perfect balance of softness and support.",
    products: [
      { name: "King Size Memory Foam", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
      { name: "Queen Size Memory Foam", price: "Rs. 72,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Single Memory Foam", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
      { name: "Hybrid Memory Foam", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "king-size": {
    hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    intro: "Experience ultimate luxury with our king-size mattresses. Designed for spacious master bedrooms, these mattresses offer expansive sleeping space with premium materials for the perfect night's rest.",
    products: [
      { name: "King Size Memory Foam", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
      { name: "King Size Spring", price: "Rs. 78,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "King Size Hybrid", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "King Size Orthopedic", price: "Rs. 88,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "spring": {
    hero: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    intro: "Enjoy traditional comfort with our spring mattresses. Featuring responsive coil construction for bounce and support, these mattresses provide excellent airflow and durable comfort.",
    products: [
      { name: "Queen Size Spring", price: "Rs. 72,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "King Size Spring", price: "Rs. 78,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Single Spring", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Premium Spring", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "queen-size": {
    hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    intro: "Discover our queen-size mattresses, perfect for couples and spacious bedrooms. These mattresses offer generous sleeping space with various comfort levels to suit your preferences.",
    products: [
      { name: "Queen Size Memory Foam", price: "Rs. 72,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
      { name: "Queen Size Spring", price: "Rs. 72,000", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
      { name: "Queen Size Hybrid", price: "Rs. 82,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Queen Size Orthopedic", price: "Rs. 75,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "single": {
    hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    intro: "Perfect for guest rooms, children's rooms, or smaller spaces, our single mattresses offer quality comfort in a compact size without compromising on support.",
    products: [
      { name: "Single Memory Foam", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
      { name: "Single Spring", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80" },
      { name: "Single Hybrid", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Single Orthopedic", price: "Rs. 48,000", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "shelves": {
    hero: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=85",
    intro: "Organize any space with our versatile shelving solutions. From wall-mounted floating shelves to sturdy freestanding units, find the perfect storage for books, decor, and essentials.",
    products: [
      { name: "Floating Shelves", price: "Rs. 32,000", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80" },
      { name: "Wall Shelf Set", price: "Rs. 28,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Corner Shelf", price: "Rs. 22,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Industrial Rack", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "cabinets": {
    hero: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=85",
    intro: "Maximize your storage with our versatile cabinets. From kitchen storage to living room display units, find the perfect cabinet to organize and enhance your space.",
    products: [
      { name: "Oak Wardrobe", price: "Rs. 1,25,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Modern Cabinet", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Storage Cabinet", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Display Cabinet", price: "Rs. 78,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "study-tables": {
    hero: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    intro: "Create your perfect workspace with our study tables. From compact desks for small rooms to spacious work tables for home offices, find the ideal desk for productivity.",
    products: [
      { name: "Arco Writing Desk", price: "Rs. 58,000", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80" },
      { name: "Taper Console Desk", price: "Rs. 52,000", image: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80" },
      { name: "Studio Work Table", price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Study Desk", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "office-desks": {
    hero: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    intro: "Boost your productivity with our ergonomic office desks. Designed for comfort and efficiency, these desks provide the perfect foundation for your home office or workspace.",
    products: [
      { name: "Compact Office Desk", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Executive Desk", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Standing Desk", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "L-Shaped Desk", price: "Rs. 72,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "filing-cabinets": {
    hero: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85",
    intro: "Keep your documents organized with our filing cabinets. Designed for efficient document storage, these cabinets combine functionality with professional aesthetics for your office.",
    products: [
      { name: "Oak File Cabinet", price: "Rs. 32,000", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80" },
      { name: "Mobile File Cabinet", price: "Rs. 28,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Tall Filing Cabinet", price: "Rs. 42,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Lateral File Cabinet", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "office-chairs": {
    hero: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1200&q=85",
    intro: "Work in comfort with our ergonomic office chairs. Designed for long working hours, these chairs provide lumbar support, adjustable features, and premium materials for maximum productivity.",
    products: [
      { name: "Miro Task Chair", price: "Rs. 36,000", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80" },
      { name: "Ergonomic Chair", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Executive Chair", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Mesh Chair", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80" },
    ]
  }
};

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const resolvedParams = await params;
  const { category, subcategory } = resolvedParams;

  // Formatting strings for display
  const title = subcategory
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const data = subcategoryData[subcategory] || {
    hero: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85",
    intro: `Explore our thoughtfully curated collection of ${title.toLowerCase()}. Designed with both form and function in mind, these pieces bring character and comfort to your ${categoryName.toLowerCase()}.`,
    products: [
      { name: `Modern ${title} 1`, price: "Rs. 32,000", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80" },
      { name: `Classic ${title} 2`, price: "Rs. 24,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
      { name: `Premium ${title} 3`, price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80" },
      { name: `Luxe ${title} 4`, price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  };

  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero">
          <img src={data.hero} alt={`${title} collection`} />
          <div>
            <p className="eyebrow">{categoryName} Collection</p>
            <h1 className="text-[#f6f4ef] text-6xl font-sans font-semibold tracking-tight">
              {title}
            </h1>
          </div>
        </section>

        <section className="room-products section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Discover your style</p>
              <h2>{title}</h2>
            </div>
            <span>{data.products.length} pieces</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {data.products.map((item) => (
              <ProductCard key={item.name} item={item} productId={item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
