import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import QuantityStepper from "@/components/QuantityStepper";
import WishlistToggle from "@/components/WishlistToggle";
import {
  BadgeCheck,
  ChevronRight,
  CircleHelp,
  MapPin,
  MessageCircle,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

const products: Record<string, { id: string; name: string; price: string; image: string; description: string; category: string }> = {
  // Sofas
  'lorenzo-3-seater-sofa': {
    id: 'lorenzo-3-seater-sofa',
    name: "Lorenzo 3-Seater Sofa",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "The Lorenzo 3-Seater Sofa combines classic design with modern comfort. Featuring premium upholstery, high-density foam cushions, and a sturdy hardwood frame, this sofa is built to last while providing the perfect spot for relaxation.",
    category: "Sofas"
  },
  'cove-two-seat-sofa': {
    id: 'cove-two-seat-sofa',
    name: "Cove Two Seat Sofa",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "Perfect for smaller spaces or intimate settings, the Cove Two Seat Sofa offers exceptional comfort in a compact footprint. Its sleek profile and premium materials make it a versatile addition to any room.",
    category: "Sofas"
  },
  'linen-lounge-sofa': {
    id: 'linen-lounge-sofa',
    name: "Linen Lounge Sofa",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "Crafted with breathable linen fabric and designed for maximum comfort, the Linen Lounge Sofa brings a relaxed elegance to your living space. Its neutral tone complements any interior style.",
    category: "Sofas"
  },
  'cloud-boucle-sofa': {
    id: 'cloud-boucle-sofa',
    name: "Cloud Bouclé Sofa",
    price: "Rs. 1,60,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "Wrap yourself in luxury with the Cloud Bouclé Sofa. Featuring soft, textured bouclé fabric and plush cushioning, this sofa creates a cozy, inviting atmosphere while making a bold style statement.",
    category: "Sofas"
  },
  'cloud-boucl-sofa': {
    id: 'cloud-boucl-sofa',
    name: "Cloud Bouclé Sofa",
    price: "Rs. 1,60,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "Wrap yourself in luxury with the Cloud Bouclé Sofa. Featuring soft, textured bouclé fabric and plush cushioning, this sofa creates a cozy, inviting atmosphere while making a bold style statement.",
    category: "Sofas"
  },
  'forma-modular-sofa': {
    id: 'forma-modular-sofa',
    name: "Forma Modular Sofa",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "The Forma Modular Sofa offers endless configuration possibilities. Its modular design lets you rearrange the pieces to suit your space, while maintaining a cohesive, modern aesthetic.",
    category: "Sofas"
  },
  'classic-recliner': {
    id: 'classic-recliner',
    name: "Classic Recliner",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "Experience ultimate relaxation with the Classic Recliner. Featuring smooth reclining mechanism, premium leather upholstery, and ergonomic lumbar support for the perfect lounging experience.",
    category: "Sofas"
  },
  'power-recliner': {
    id: 'power-recliner',
    name: "Power Recliner",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Power Recliner offers effortless comfort with its electric reclining mechanism. With the touch of a button, adjust your position for reading, watching TV, or napping. Premium leather and plush cushioning complete the luxury experience.",
    category: "Sofas"
  },
  'swivel-recliner': {
    id: 'swivel-recliner',
    name: "Swivel Recliner",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85",
    description: "The Swivel Recliner combines smooth 360-degree rotation with comfortable reclining. Perfect for entertaining or enjoying your favorite shows, this chair offers versatility and style in one elegant package.",
    category: "Sofas"
  },
  'leather-recliner': {
    id: 'leather-recliner',
    name: "Leather Recliner",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Leather Recliner epitomizes luxury with its premium genuine leather upholstery. Rich color, smooth texture, and exceptional durability make this recliner a timeless addition to any sophisticated living space.",
    category: "Sofas"
  },
  'sofa-cum-bed': {
    id: 'sofa-cum-bed',
    name: "Sofa Cum Bed",
    price: "Rs. 1,35,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "Maximize your space with the Sofa Cum Bed. This versatile piece transforms from a stylish sofa to a comfortable bed with ease, making it perfect for guest rooms or studio apartments.",
    category: "Sofas"
  },
  'l-shaped-sectional': {
    id: 'l-shaped-sectional',
    name: "L-Shaped Sectional",
    price: "Rs. 1,85,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "The L-Shaped Sectional provides ample seating while creating a modern focal point in your living room. Its deep seats and wide armrests offer superior comfort for family gatherings.",
    category: "Sofas"
  },
  // Bedroom
  'mara-oak-bed': {
    id: 'mara-oak-bed',
    name: "Mara Oak Bed",
    price: "Rs. 1,42,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Mara Oak Bed offers timeless elegance with solid oak construction. Featuring a comfortable headboard and sturdy frame, it creates a serene sanctuary for restful sleep.",
    category: "Bedroom"
  },
  'upholstered-queen-bed': {
    id: 'upholstered-queen-bed',
    name: "Upholstered Queen Bed",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    description: "The Upholstered Queen Bed features a luxurious fabric headboard and sturdy frame. Its soft texture and elegant design create a cozy and sophisticated bedroom centerpiece.",
    category: "Bedroom"
  },
  'platform-queen-bed': {
    id: 'platform-queen-bed',
    name: "Platform Queen Bed",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Platform Queen Bed offers a minimalist design with a low profile. Its clean lines and solid construction provide modern style without compromising on comfort.",
    category: "Bedroom"
  },
  'storage-queen-bed': {
    id: 'storage-queen-bed',
    name: "Storage Queen Bed",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Storage Queen Bed combines comfort with practicality. Featuring built-in drawers beneath the mattress, it maximizes space while maintaining a sleek, elegant appearance.",
    category: "Bedroom"
  },
  'mara-oak-king-bed': {
    id: 'mara-oak-king-bed',
    name: "Mara Oak King Bed",
    price: "Rs. 1,65,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Mara Oak King Bed offers expansive luxury with solid oak construction. Its grand proportions and elegant headboard create a stunning centerpiece for spacious master bedrooms.",
    category: "Bedroom"
  },
  'upholstered-king-bed': {
    id: 'upholstered-king-bed',
    name: "Upholstered King Bed",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    description: "The Upholstered King Bed features a luxurious fabric headboard and sturdy frame. Its generous dimensions and soft texture create the ultimate sleep sanctuary.",
    category: "Bedroom"
  },
  'platform-king-bed': {
    id: 'platform-king-bed',
    name: "Platform King Bed",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Platform King Bed offers a minimalist design with expansive sleeping space. Its low profile and clean lines provide modern style without compromising on comfort.",
    category: "Bedroom"
  },
  'storage-king-bed': {
    id: 'storage-king-bed',
    name: "Storage King Bed",
    price: "Rs. 1,35,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Storage King Bed combines luxury with practicality. Featuring built-in drawers beneath the mattress, it maximizes space in large bedrooms while maintaining elegance.",
    category: "Bedroom"
  },
  'arch-bookshelf': {
    id: 'arch-bookshelf',
    name: "Arch Bookshelf",
    price: "Rs. 65,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Arch Bookshelf features a distinctive arched design that adds architectural interest to any room. Its open shelving provides ample space for books and decor.",
    category: "Storage"
  },
  'linear-wall-shelf': {
    id: 'linear-wall-shelf',
    name: "Linear Wall Shelf",
    price: "Rs. 24,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Linear Wall Shelf offers a clean, minimalist design perfect for modern spaces. Its streamlined profile provides display space without overwhelming the room.",
    category: "Storage"
  },
  'walnut-cabinet': {
    id: 'walnut-cabinet',
    name: "Walnut Cabinet",
    price: "Rs. 89,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Walnut Cabinet combines rich walnut wood with functional storage. Its elegant design and spacious compartments make it perfect for dining rooms or living areas.",
    category: "Storage"
  },
  'gallery-shelving': {
    id: 'gallery-shelving',
    name: "Gallery Shelving",
    price: "Rs. 56,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Gallery Shelving system offers versatile display options for art and collectibles. Its modular design allows you to create custom arrangements that suit your space.",
    category: "Storage"
  },
  'fawn-bedside-table': {
    id: 'fawn-bedside-table',
    name: "Fawn Bedside Table",
    price: "Rs. 24,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "Complete your bedroom with the Fawn Bedside Table. Featuring drawers for bedside essentials and a compact design that maximizes space.",
    category: "Bedroom"
  },
  'linen-bench': {
    id: 'linen-bench',
    name: "Linen Bench",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=1400&q=85",
    description: "The Linen Bench adds versatile seating to your bedroom or entryway. Its upholstered cushion provides comfort while the sleek design complements any decor.",
    category: "Bedroom"
  },
  'oak-dining-bench': {
    id: 'oak-dining-bench',
    name: "Oak Dining Bench",
    price: "Rs. 42,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Dining Bench features solid oak construction with natural warmth. Perfect for dining tables, it provides comfortable seating for multiple guests while adding rustic charm.",
    category: "Dining"
  },
  'upholstered-bench': {
    id: 'upholstered-bench',
    name: "Upholstered Bench",
    price: "Rs. 48,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Upholstered Bench combines comfort with elegance. Its cushioned seat and premium fabric provide luxurious seating for dining areas or entryways.",
    category: "Dining"
  },
  'arc-wardrobe': {
    id: 'arc-wardrobe',
    name: "Arc Wardrobe",
    price: "Rs. 1,05,000",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    description: "The Arc Wardrobe features elegant curved doors and generous storage space. Its adjustable shelves and hanging rods keep your clothes organized and accessible.",
    category: "Bedroom"
  },
  'noma-dresser': {
    id: 'noma-dresser',
    name: "Noma Dresser",
    price: "Rs. 74,000",
    image: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=1400&q=85",
    description: "The Noma Dresser offers ample storage with six spacious drawers. Its minimalist design and smooth-gliding hardware make it a practical yet stylish addition to any bedroom.",
    category: "Bedroom"
  },
  'oak-dresser': {
    id: 'oak-dresser',
    name: "Oak Dresser",
    price: "Rs. 65,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Dresser combines natural oak with practical storage. Its warm tones and clean lines provide both functionality and style for your bedroom.",
    category: "Bedroom"
  },
  'modern-dresser': {
    id: 'modern-dresser',
    name: "Modern Dresser",
    price: "Rs. 82,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Modern Dresser features sleek design with ample drawer space. Its contemporary look and smooth hardware make it perfect for modern bedrooms.",
    category: "Bedroom"
  },
  'vintage-dresser': {
    id: 'vintage-dresser',
    name: "Vintage Dresser",
    price: "Rs. 58,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Vintage Dresser brings classic charm to your bedroom. Its traditional design and quality construction provide timeless storage with elegant appeal.",
    category: "Bedroom"
  },
  'soft-lounge-chair': {
    id: 'soft-lounge-chair',
    name: "Soft Lounge Chair",
    price: "Rs. 48,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "The Soft Lounge Chair provides comfortable seating for your bedroom or reading nook. Its plush cushioning and ergonomic design ensure hours of relaxation.",
    category: "Bedroom"
  },
  'miro-lounge-chair': {
    id: 'miro-lounge-chair',
    name: "Miro Lounge Chair",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "The Miro Lounge Chair combines modern design with exceptional comfort. Its sculptural form and premium upholstery make it a statement piece for any living space.",
    category: "Bedroom"
  },
  'oak-vanity-desk': {
    id: 'oak-vanity-desk',
    name: "Oak Vanity Desk",
    price: "Rs. 58,000",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Vanity Desk serves as both a workspace and dressing table. Its elegant design and practical storage make it perfect for modern bedrooms.",
    category: "Bedroom"
  },
  'dune-low-table': {
    id: 'dune-low-table',
    name: "Dune Low Table",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
    description: "The Dune Low Table offers a low-profile design perfect for modern living rooms. Its clean lines and sturdy construction make it an ideal centerpiece for relaxed seating arrangements.",
    category: "Dining"
  },
  'nero-marble-table': {
    id: 'nero-marble-table',
    name: "Nero Marble Table",
    price: "Rs. 74,000",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1400&q=85",
    description: "The Nero Marble Table features luxurious marble atop a sleek base. Its dramatic black marble surface creates a stunning focal point while providing a durable surface for everyday use.",
    category: "Dining"
  },
  'onda-coffee-table': {
    id: 'onda-coffee-table',
    name: "Onda Coffee Table",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1400&q=85",
    description: "The Onda Coffee Table features organic curves inspired by flowing water. Its sculptural design adds artistic flair to your living room while providing a functional surface for drinks and decor.",
    category: "Dining"
  },
  'oak-round-table': {
    id: 'oak-round-table',
    name: "Oak Round Table",
    price: "Rs. 26,000",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Round Table brings warmth and natural beauty to any space. Crafted from solid oak with a smooth finish, this table is perfect for intimate gatherings or as a stylish accent piece.",
    category: "Dining"
  },
  'taper-console': {
    id: 'taper-console',
    name: "Taper Console",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
    description: "The Taper Console offers elegant tapered legs and a spacious surface. Perfect for entryways or behind sofas, this console table adds sophistication to any space.",
    category: "Dining"
  },
  'marble-console': {
    id: 'marble-console',
    name: "Marble Console",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1400&q=85",
    description: "The Marble Console features luxurious marble atop sleek metal legs. Its elegant design makes it perfect for displaying decor and creating a stylish focal point in entryways or living rooms.",
    category: "Dining"
  },
  'oak-console-table': {
    id: 'oak-console-table',
    name: "Oak Console Table",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Console Table combines natural oak with clean lines. Its sturdy construction and generous surface provide both functionality and style for hallways and living spaces.",
    category: "Dining"
  },
  'floating-console': {
    id: 'floating-console',
    name: "Floating Console",
    price: "Rs. 62,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Floating Console features a wall-mounted design that creates visual lightness. Perfect for modern spaces, it provides storage and display space without taking up floor area.",
    category: "Dining"
  },
  'oak-tv-unit': {
    id: 'oak-tv-unit',
    name: "Oak TV Unit",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak TV Unit combines natural oak with practical storage. Featuring drawers and open compartments, it's perfect for organizing media equipment while displaying decor.",
    category: "Storage"
  },
  'modern-tv-console': {
    id: 'modern-tv-console',
    name: "Modern TV Console",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Modern TV Console features sleek lines and contemporary design. With ample storage space and cable management, it keeps your entertainment area organized and stylish.",
    category: "Storage"
  },
  'floating-tv-unit': {
    id: 'floating-tv-unit',
    name: "Floating TV Unit",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Floating TV Unit creates a clean, modern look with its wall-mounted design. Perfect for smaller spaces, it provides storage without taking up valuable floor area.",
    category: "Storage"
  },
  'low-profile-tv-stand': {
    id: 'low-profile-tv-stand',
    name: "Low Profile TV Stand",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Low Profile TV Stand offers a minimalist design that keeps the focus on your screen. Its low height and clean lines make it perfect for modern entertainment setups.",
    category: "Storage"
  },
  'frame-nightstand': {
    id: 'frame-nightstand',
    name: "Frame Nightstand",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
    description: "The Frame Nightstand features a clean, geometric design with a spacious drawer. Its compact size makes it ideal for smaller bedrooms while providing essential bedside storage.",
    category: "Bedroom"
  },
  // Dining
  'luma-dining-table': {
    id: 'luma-dining-table',
    name: "Luma Dining Table",
    price: "Rs. 92,000",
    image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
    description: "The Luma Dining Table combines modern design with exceptional craftsmanship. Its solid wood top and sturdy base create a stunning centerpiece for family gatherings.",
    category: "Dining"
  },
  'oak-4-seater': {
    id: 'oak-4-seater',
    name: "Oak 4-Seater",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak 4-Seater Table features solid oak construction with natural warmth. Perfect for family meals, its sturdy design and beautiful grain make it a timeless addition to any dining room.",
    category: "Dining"
  },
  'round-4-seater': {
    id: 'round-4-seater',
    name: "Round 4-Seater",
    price: "Rs. 65,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Round 4-Seater Table offers intimate dining with its circular design. Perfect for smaller spaces, it promotes conversation while providing comfortable seating for four.",
    category: "Dining"
  },
  'glass-4-seater': {
    id: 'glass-4-seater',
    name: "Glass 4-Seater",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Glass 4-Seater Table features a tempered glass top with elegant metal legs. Its modern design creates visual lightness while providing a durable surface for dining.",
    category: "Dining"
  },
  'oak-6-seater': {
    id: 'oak-6-seater',
    name: "Oak 6-Seater",
    price: "Rs. 1,05,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak 6-Seater Table offers generous seating with solid oak construction. Perfect for family gatherings, its spacious design and natural warmth create an inviting dining experience.",
    category: "Dining"
  },
  'rectangular-6-seater': {
    id: 'rectangular-6-seater',
    name: "Rectangular 6-Seater",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Rectangular 6-Seater Table features clean lines and a spacious surface. Its classic rectangular design provides comfortable seating for six while fitting beautifully in most dining rooms.",
    category: "Dining"
  },
  'glass-6-seater': {
    id: 'glass-6-seater',
    name: "Glass 6-Seater",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Glass 6-Seater Table combines elegance with modern design. Its tempered glass top and sleek metal base create a sophisticated centerpiece for larger dining spaces.",
    category: "Dining"
  },
  'grand-extension-table': {
    id: 'grand-extension-table',
    name: "Grand Extension Table",
    price: "Rs. 1,85,000",
    image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
    description: "The Grand Extension Table offers versatility with its extendable design. Perfect for hosting large gatherings, it expands to accommodate 8-10 guests while maintaining elegant proportions.",
    category: "Dining"
  },
  'oak-8-seater': {
    id: 'oak-8-seater',
    name: "Oak 8-Seater",
    price: "Rs. 1,65,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak 8-Seater Table provides generous seating with solid oak construction. Its robust design and natural warmth create an impressive centerpiece for grand dining rooms.",
    category: "Dining"
  },
  'marble-8-seater': {
    id: 'marble-8-seater',
    name: "Marble 8-Seater",
    price: "Rs. 2,15,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Marble 8-Seater Table epitomizes luxury with its stunning marble top. Its elegant design and premium materials create a sophisticated dining experience for special occasions.",
    category: "Dining"
  },
  'glass-8-seater': {
    id: 'glass-8-seater',
    name: "Glass 8-Seater",
    price: "Rs. 1,95,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Glass 8-Seater Table combines modern aesthetics with grand proportions. Its tempered glass top and sleek base create a contemporary focal point for luxury dining spaces.",
    category: "Dining"
  },
  'noma-dining-chair': {
    id: 'noma-dining-chair',
    name: "Noma Dining Chair",
    price: "Rs. 26,000",
    image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=1400&q=85",
    description: "The Noma Dining Chair offers ergonomic support and elegant design. Its contoured back and comfortable seat ensure long-lasting comfort during dinner parties.",
    category: "Dining"
  },
  'marta-dining-chair': {
    id: 'marta-dining-chair',
    name: "Marta Dining Chair",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=1400&q=85",
    description: "The Marta Dining Chair features a sculptural back design and premium upholstery. Its unique aesthetic adds character to any dining room while providing exceptional comfort.",
    category: "Dining"
  },
  'upholstered-chair': {
    id: 'upholstered-chair',
    name: "Upholstered Chair",
    price: "Rs. 35,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Upholstered Chair combines comfort with elegance. Its cushioned seat and back provide superior comfort for long dinner parties while adding sophistication to your dining space.",
    category: "Dining"
  },
  'atelier-sideboard': {
    id: 'atelier-sideboard',
    name: "Atelier Sideboard",
    price: "Rs. 72,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Atelier Sideboard offers generous storage with adjustable shelves and drawers. Its elegant design makes it perfect for displaying your finest tableware and linens.",
    category: "Dining"
  },
  'oval-extension-table': {
    id: 'oval-extension-table',
    name: "Oval Extension Table",
    price: "Rs. 1,18,000",
    image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=1400&q=85",
    description: "The Oval Extension Table accommodates intimate dinners and large gatherings alike. Its extendable design allows you to adjust the size as needed without compromising style.",
    category: "Dining"
  },
  'cane-armchair': {
    id: 'cane-armchair',
    name: "Cane Armchair",
    price: "Rs. 32,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "The Cane Armchair combines classic cane detailing with modern comfort. Its upholstered seat and woven cane back create a sophisticated look for your dining area.",
    category: "Dining"
  },
  'oak-display-cabinet': {
    id: 'oak-display-cabinet',
    name: "Oak Display Cabinet",
    price: "Rs. 82,000",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Display Cabinet features glass doors and adjustable shelves. Perfect for showcasing your prized possessions while keeping them protected from dust.",
    category: "Dining"
  },
  'taper-serving-console': {
    id: 'taper-serving-console',
    name: "Taper Serving Console",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
    description: "The Taper Serving Console offers additional serving space with elegant tapered legs. Its sleek design makes it perfect for buffets or as a side table in your dining room.",
    category: "Dining"
  },
  // Storage
  'oak-wardrobe': {
    id: 'oak-wardrobe',
    name: "Oak Wardrobe",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Wardrobe features solid oak construction with adjustable shelves and hanging space. Its timeless design provides ample storage while enhancing your bedroom decor.",
    category: "Storage"
  },
  'sliding-door-wardrobe': {
    id: 'sliding-door-wardrobe',
    name: "Sliding Door Wardrobe",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Sliding Door Wardrobe offers space-saving design with smooth sliding doors. Perfect for smaller bedrooms, it provides generous storage without requiring clearance space for doors.",
    category: "Storage"
  },
  'walk-in-wardrobe': {
    id: 'walk-in-wardrobe',
    name: "Walk-in Wardrobe",
    price: "Rs. 1,85,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Walk-in Wardrobe creates a luxurious dressing space with its expansive design. Featuring multiple compartments, hanging rails, and shelving for ultimate organization.",
    category: "Storage"
  },
  'modern-bookshelf': {
    id: 'modern-bookshelf',
    name: "Modern Bookshelf",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "The Modern Bookshelf combines functionality with style. Open shelving design allows you to display your book collection and decorative items beautifully.",
    category: "Storage"
  },
  'display-units': {
    id: 'display-units',
    name: "Display Units",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Display Units feature glass doors and adjustable shelves. Perfect for showcasing your prized possessions while keeping them protected from dust.",
    category: "Storage"
  },
  'wall-display-unit': {
    id: 'wall-display-unit',
    name: "Wall Display Unit",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Wall Display Unit offers a modern storage solution with sleek design. Perfect for displaying books, decor, and collectibles while maximizing wall space.",
    category: "Storage"
  },
  'oak-display-cabinet-storage': {
    id: 'oak-display-cabinet-storage',
    name: "Oak Display Cabinet",
    price: "Rs. 82,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Display Cabinet features glass doors and adjustable shelves. Perfect for showcasing your prized possessions while keeping them protected from dust.",
    category: "Storage"
  },
  'glass-display-unit': {
    id: 'glass-display-unit',
    name: "Glass Display Unit",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    description: "The Glass Display Unit features elegant glass panels and LED lighting. Perfect for displaying collectibles and creating a stunning focal point in your living room.",
    category: "Storage"
  },
  'modern-showcase': {
    id: 'modern-showcase',
    name: "Modern Showcase",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Modern Showcase combines contemporary design with functional storage. Its spacious compartments and glass doors provide the perfect platform for your treasured items.",
    category: "Storage"
  },
  'chest-of-drawers': {
    id: 'chest-of-drawers',
    name: "Chest of Drawers",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Chest of Drawers provides ample storage with smooth-gliding drawers. Its compact footprint makes it ideal for bedrooms or hallways.",
    category: "Storage"
  },
  'tall-chest': {
    id: 'tall-chest',
    name: "Tall Chest",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Tall Chest maximizes vertical space with multiple drawers. Perfect for smaller rooms, it provides generous storage without taking up much floor area.",
    category: "Storage"
  },
  'wide-chest': {
    id: 'wide-chest',
    name: "Wide Chest",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Wide Chest offers expansive storage with a low profile. Its wide design provides ample surface space for decor while keeping items organized.",
    category: "Storage"
  },
  'compact-chest': {
    id: 'compact-chest',
    name: "Compact Chest",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Compact Chest is perfect for small spaces. Its efficient design provides essential storage in a minimal footprint, ideal for apartments or nurseries.",
    category: "Storage"
  },
  'display-cabinet': {
    id: 'display-cabinet',
    name: "Display Cabinet",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Display Cabinet features glass doors and adjustable shelves. Perfect for showcasing your prized possessions while keeping them protected from dust.",
    category: "Storage"
  },
  'floating-shelves': {
    id: 'floating-shelves',
    name: "Floating Shelves",
    price: "Rs. 32,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "The Floating Shelves offer a modern storage solution for books and decor. Their sleek design creates visual interest while maximizing wall space.",
    category: "Storage"
  },
  'wall-shelf-set': {
    id: 'wall-shelf-set',
    name: "Wall Shelf Set",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Wall Shelf Set provides versatile storage in a coordinated design. Perfect for displaying books, plants, and decorative items in any room.",
    category: "Storage"
  },
  'corner-shelf': {
    id: 'corner-shelf',
    name: "Corner Shelf",
    price: "Rs. 22,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Corner Shelf maximizes unused corner space with its triangular design. Perfect for small rooms, it provides storage without taking up valuable floor area.",
    category: "Storage"
  },
  'industrial-rack': {
    id: 'industrial-rack',
    name: "Industrial Rack",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Industrial Rack features sturdy metal construction with multiple shelves. Its robust design and industrial aesthetic make it perfect for garages, workshops, or modern homes.",
    category: "Storage"
  },
  'storage-bench': {
    id: 'storage-bench',
    name: "Storage Bench",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Storage Bench combines seating with hidden storage. Perfect for entryways or foot of the bed, it provides a place to sit while keeping clutter out of sight.",
    category: "Storage"
  },
  'console-storage': {
    id: 'console-storage',
    name: "Console Storage",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Console Storage offers versatile storage with drawers and shelves. Its elegant design works well in hallways, living rooms, or dining areas.",
    category: "Storage"
  },
  'modern-cabinet': {
    id: 'modern-cabinet',
    name: "Modern Cabinet",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Modern Cabinet features sleek design with ample storage space. Its clean lines and smooth hardware make it perfect for contemporary living spaces.",
    category: "Storage"
  },
  'storage-cabinet': {
    id: 'storage-cabinet',
    name: "Storage Cabinet",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Storage Cabinet provides versatile storage with adjustable shelves. Perfect for organizing any room, its practical design keeps essentials neatly stored.",
    category: "Storage"
  },
  'modular-storage': {
    id: 'modular-storage',
    name: "Modular Storage",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "The Modular Storage unit can be configured to suit your space. Its flexible design allows you to stack or arrange modules for custom storage solutions.",
    category: "Storage"
  },
  // Study & Office
  'arco-writing-desk': {
    id: 'arco-writing-desk',
    name: "Arco Writing Desk",
    price: "Rs. 58,000",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
    description: "The Arco Writing Desk features a sleek marble top and elegant metal legs. Its timeless design provides ample workspace while adding sophistication to your home office.",
    category: "Study & Office"
  },
  'miro-task-chair': {
    id: 'miro-task-chair',
    name: "Miro Task Chair",
    price: "Rs. 36,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "The Miro Task Chair offers ergonomic support for long work sessions. Its adjustable height and comfortable cushioning ensure you stay productive without sacrificing comfort.",
    category: "Study & Office"
  },
  'ergonomic-chair': {
    id: 'ergonomic-chair',
    name: "Ergonomic Chair",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Ergonomic Chair is designed for all-day comfort with adjustable lumbar support, armrests, and seat height. Its breathable mesh back keeps you cool during long work sessions.",
    category: "Study & Office"
  },
  'executive-chair': {
    id: 'executive-chair',
    name: "Executive Chair",
    price: "Rs. 65,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Executive Chair combines premium leather with sophisticated design. Perfect for leadership roles, it provides exceptional comfort with executive styling for your office.",
    category: "Study & Office"
  },
  'mesh-chair': {
    id: 'mesh-chair',
    name: "Mesh Chair",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "The Mesh Chair features a breathable mesh back for superior airflow. Its ergonomic design and adjustable features provide comfortable seating for extended work periods.",
    category: "Study & Office"
  },
  'frame-shelving-unit': {
    id: 'frame-shelving-unit',
    name: "Frame Shelving Unit",
    price: "Rs. 64,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Frame Shelving Unit provides open storage with a geometric design. Perfect for books and office supplies, it keeps your workspace organized and stylish.",
    category: "Study & Office"
  },
  'taper-console-desk': {
    id: 'taper-console-desk',
    name: "Taper Console Desk",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=1400&q=85",
    description: "The Taper Console Desk serves as a compact workspace for smaller rooms. Its elegant tapered legs and spacious surface make it both functional and beautiful.",
    category: "Study & Office"
  },
  'studio-work-table': {
    id: 'studio-work-table',
    name: "Studio Work Table",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=1400&q=85",
    description: "The Studio Work Table provides a large, sturdy surface for creative work. Its solid construction and clean design make it perfect for artists, designers, and professionals.",
    category: "Study & Office"
  },
  'oak-study-desk': {
    id: 'oak-study-desk',
    name: "Oak Study Desk",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak Study Desk combines natural oak with practical design. Its spacious surface and drawer storage make it perfect for students and home offices.",
    category: "Study & Office"
  },
  'executive-desk': {
    id: 'executive-desk',
    name: "Executive Desk",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Executive Desk commands attention with its substantial design and premium materials. Perfect for leadership roles, it provides ample workspace with sophisticated styling.",
    category: "Study & Office"
  },
  'standing-desk': {
    id: 'standing-desk',
    name: "Standing Desk",
    price: "Rs. 65,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Standing Desk promotes healthy work habits with adjustable height. Switch between sitting and standing to boost energy and productivity throughout the day.",
    category: "Study & Office"
  },
  'l-shaped-desk': {
    id: 'l-shaped-desk',
    name: "L-Shaped Desk",
    price: "Rs. 72,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The L-Shaped Desk maximizes corner space with its efficient design. Perfect for multi-monitor setups, it provides extensive workspace while fitting neatly into any room.",
    category: "Study & Office"
  },
  'compact-office-desk': {
    id: 'compact-office-desk',
    name: "Compact Office Desk",
    price: "Rs. 42,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Compact Office Desk is perfect for small spaces. Its efficient design provides essential workspace without overwhelming your room, ideal for apartments and home offices.",
    category: "Study & Office"
  },
  'oak-file-cabinet': {
    id: 'oak-file-cabinet',
    name: "Oak File Cabinet",
    price: "Rs. 32,000",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak File Cabinet offers secure storage for documents and office supplies. Its lockable drawers and solid construction keep your important papers safe and organized.",
    category: "Study & Office"
  },
  'mobile-file-cabinet': {
    id: 'mobile-file-cabinet',
    name: "Mobile File Cabinet",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1400&q=85",
    description: "The Mobile File Cabinet features casters for easy mobility. Perfect for flexible office layouts, it provides document storage that can be moved wherever needed.",
    category: "Study & Office"
  },
  'tall-filing-cabinet': {
    id: 'tall-filing-cabinet',
    name: "Tall Filing Cabinet",
    price: "Rs. 42,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Tall Filing Cabinet maximizes vertical storage space. With multiple drawers and a compact footprint, it's perfect for organizing documents in smaller offices.",
    category: "Study & Office"
  },
  'lateral-file-cabinet': {
    id: 'lateral-file-cabinet',
    name: "Lateral File Cabinet",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "The Lateral File Cabinet provides spacious storage with a low profile. Perfect for use under windows or as additional workspace, it combines functionality with versatile design.",
    category: "Study & Office"
  },
  'cove-reading-chair': {
    id: 'cove-reading-chair',
    name: "Cove Reading Chair",
    price: "Rs. 48,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "The Cove Reading Chair provides comfortable seating for your home office or reading nook. Its plush cushioning and supportive back ensure hours of relaxation.",
    category: "Study & Office"
  },
  'dune-side-table': {
    id: 'dune-side-table',
    name: "Dune Side Table",
    price: "Rs. 24,000",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
    description: "The Dune Side Table offers a compact surface for your workspace. Its simple design makes it perfect as a laptop stand or accent table.",
    category: "Study & Office"
  },
  // Mattress
  'king-size-memory-foam': {
    id: 'king-size-memory-foam',
    name: "King Size Memory Foam",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The King Size Memory Foam Mattress contours to your body for personalized support. Its high-density foam provides pressure relief and optimal spinal alignment for restful sleep.",
    category: "Mattress"
  },
  'queen-size-memory-foam': {
    id: 'queen-size-memory-foam',
    name: "Queen Size Memory Foam",
    price: "Rs. 72,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Queen Size Memory Foam Mattress offers the perfect balance of comfort and support. Its responsive foam adapts to your body shape for a personalized sleep experience.",
    category: "Mattress"
  },
  'single-memory-foam': {
    id: 'single-memory-foam',
    name: "Single Memory Foam",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Single Memory Foam Mattress provides quality foam construction for smaller spaces. Its supportive design ensures a comfortable night's sleep without compromising on quality.",
    category: "Mattress"
  },
  'hybrid-memory-foam': {
    id: 'hybrid-memory-foam',
    name: "Hybrid Memory Foam",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Hybrid Memory Foam Mattress combines memory foam with support layers for the best of both worlds. Enjoy the contouring comfort of foam with the responsive support of a hybrid design.",
    category: "Mattress"
  },
  'king-size-spring': {
    id: 'king-size-spring',
    name: "King Size Spring",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The King Size Spring Mattress features traditional coil construction for bounce and support. Its premium springs provide excellent airflow and durability for restful sleep.",
    category: "Mattress"
  },
  'king-size-hybrid': {
    id: 'king-size-hybrid',
    name: "King Size Hybrid",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The King Size Hybrid Mattress combines the best of foam and spring technology. Its memory foam top layer provides pressure relief while the spring base offers support.",
    category: "Mattress"
  },
  'king-size-orthopedic': {
    id: 'king-size-orthopedic',
    name: "King Size Orthopedic",
    price: "Rs. 88,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The King Size Orthopedic Mattress is designed for superior back support. Its firm construction and targeted support zones promote proper spinal alignment for those with back pain.",
    category: "Mattress"
  },
  'single-spring': {
    id: 'single-spring',
    name: "Single Spring",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Single Spring Mattress offers traditional coil support in a compact size. Perfect for guest rooms or smaller bedrooms, it provides durable comfort at an affordable price.",
    category: "Mattress"
  },
  'premium-spring': {
    id: 'premium-spring',
    name: "Premium Spring",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Premium Spring Mattress features high-quality coil construction with reinforced edges. Its enhanced support system provides edge-to-edge comfort and durability.",
    category: "Mattress"
  },
  'queen-size-hybrid': {
    id: 'queen-size-hybrid',
    name: "Queen Size Hybrid",
    price: "Rs. 82,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Queen Size Hybrid Mattress combines foam comfort with spring support. Its balanced design offers pressure relief and responsive support for couples.",
    category: "Mattress"
  },
  'queen-size-orthopedic': {
    id: 'queen-size-orthopedic',
    name: "Queen Size Orthopedic",
    price: "Rs. 75,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Queen Size Orthopedic Mattress provides firm support for back health. Its targeted support zones and durable construction ensure restful sleep with proper spinal alignment.",
    category: "Mattress"
  },
  'queen-size-spring': {
    id: 'queen-size-spring',
    name: "Queen Size Spring",
    price: "Rs. 72,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Queen Size Spring Mattress features traditional coil construction for bounce and support. Its premium springs provide excellent airflow and durability for lasting comfort.",
    category: "Mattress"
  },
  'single-mattress': {
    id: 'single-mattress',
    name: "Single Mattress",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Single Mattress offers comfort and support for smaller spaces. Its quality foam construction provides the perfect balance of softness and support for a good night's sleep.",
    category: "Mattress"
  },
  'single-hybrid': {
    id: 'single-hybrid',
    name: "Single Hybrid",
    price: "Rs. 52,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Single Hybrid Mattress combines foam comfort with spring support in a compact size. Perfect for guest rooms, it offers premium comfort without taking up much space.",
    category: "Mattress"
  },
  'single-orthopedic': {
    id: 'single-orthopedic',
    name: "Single Orthopedic",
    price: "Rs. 48,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Single Orthopedic Mattress provides firm support for back health in a compact size. Its targeted support zones ensure proper spinal alignment for restful sleep.",
    category: "Mattress"
  },
  'hybrid-mattress': {
    id: 'hybrid-mattress',
    name: "Hybrid Mattress",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Hybrid Mattress combines the best of foam and spring technology. Its memory foam top layer provides pressure relief while the spring base offers support and breathability.",
    category: "Mattress"
  },
  'orthopedic-mattress': {
    id: 'orthopedic-mattress',
    name: "Orthopedic Mattress",
    price: "Rs. 78,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Orthopedic Mattress is designed for superior back support. Its firm construction and targeted support zones promote proper spinal alignment for those with back pain.",
    category: "Mattress"
  },
  'luxury-pillow-top': {
    id: 'luxury-pillow-top',
    name: "Luxury Pillow Top",
    price: "Rs. 1,05,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Luxury Pillow Top Mattress features a plush pillow top layer for cloud-like comfort. Its premium materials and expert construction provide the ultimate sleeping experience.",
    category: "Mattress"
  },
  'cooling-gel-mattress': {
    id: 'cooling-gel-mattress',
    name: "Cooling Gel Mattress",
    price: "Rs. 88,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    description: "The Cooling Gel Mattress features a gel-infused foam layer that dissipates heat. Perfect for hot sleepers, it keeps you cool and comfortable throughout the night.",
    category: "Mattress"
  },
  'natural-latex-mattress': {
    id: 'natural-latex-mattress',
    name: "Natural Latex Mattress",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Natural Latex Mattress is made from 100% natural latex for eco-friendly comfort. Its responsive foam provides pressure relief while being naturally hypoallergenic and antimicrobial.",
    category: "Mattress"
  },
  // Outdoor
  'patio-dining-set': {
    id: 'patio-dining-set',
    name: "Patio Dining Set",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=85",
    description: "Our Patio Dining Set is crafted from weather-resistant materials perfect for outdoor entertaining. The table and chairs withstand the elements while maintaining their beauty.",
    category: "Outdoor"
  },
  'garden-lounge-chair': {
    id: 'garden-lounge-chair',
    name: "Garden Lounge Chair",
    price: "Rs. 35,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Garden Lounge Chair offers ultimate relaxation outdoors. Its ergonomic design and comfortable cushions make it perfect for reading or napping in your garden.",
    category: "Outdoor"
  },
  'outdoor-swing': {
    id: 'outdoor-swing',
    name: "Outdoor Swing",
    price: "Rs. 85,000",
    image: "https://placehold.co/1400x800/4a7c59/white?text=Outdoor+Swing",
    description: "Our Outdoor Swing adds charm to any patio or garden. The sturdy construction and comfortable seating make it a favorite spot for relaxation.",
    category: "Outdoor"
  },
  'hammock-chair': {
    id: 'hammock-chair',
    name: "Hammock Chair",
    price: "Rs. 18,000",
    image: "https://placehold.co/1400x800/4a7c59/white?text=Hammock+Chair",
    description: "The Hammock Chair brings a touch of bohemian style to your outdoor space. Its comfortable design and durable materials make it perfect for relaxation.",
    category: "Outdoor"
  },
  'garden-swing-set': {
    id: 'garden-swing-set',
    name: "Garden Swing Set",
    price: "Rs. 95,000",
    image: "https://placehold.co/1400x800/4a7c59/white?text=Garden+Swing+Set",
    description: "The Garden Swing Set is perfect for families. Its sturdy construction and comfortable seating provide endless hours of outdoor enjoyment.",
    category: "Outdoor"
  },
  'porch-swing': {
    id: 'porch-swing',
    name: "Porch Swing",
    price: "Rs. 62,000",
    image: "https://placehold.co/1400x800/4a7c59/white?text=Porch+Swing",
    description: "The Porch Swing adds classic charm to your home. Its gentle motion and comfortable seating make it the perfect spot for relaxation.",
    category: "Outdoor"
  },
  'aluminum-bistro-set': {
    id: 'aluminum-bistro-set',
    name: "Aluminum Bistro Set",
    price: "Rs. 55,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Aluminum Bistro Set is perfect for intimate outdoor dining. Its lightweight yet durable aluminum construction makes it easy to move and rearrange.",
    category: "Outdoor"
  },
  'teak-coffee-table': {
    id: 'teak-coffee-table',
    name: "Teak Coffee Table",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Teak Coffee Table is crafted from durable teak wood that naturally resists weather. Its simple design complements any outdoor seating arrangement.",
    category: "Outdoor"
  },
  'outdoor-sectional': {
    id: 'outdoor-sectional',
    name: "Outdoor Sectional",
    price: "Rs. 1,85,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Outdoor Sectional provides ample seating for large gatherings. Weather-resistant materials ensure durability while maintaining comfort and style.",
    category: "Outdoor"
  },
  'sun-lounger': {
    id: 'sun-lounger',
    name: "Sun Lounger",
    price: "Rs. 42,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Sun Lounger offers the perfect spot for sunbathing. Its adjustable backrest and comfortable cushioning allow you to relax in style by the pool or on your patio.",
    category: "Outdoor"
  },
  'garden-bench': {
    id: 'garden-bench',
    name: "Garden Bench",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1b?auto=format&fit=crop&w=1400&q=85",
    description: "The Garden Bench adds a classic touch to your outdoor space. Its weather-resistant construction and timeless design make it a beautiful addition to any garden or walkway.",
    category: "Outdoor"
  },
  'parasol-stand': {
    id: 'parasol-stand',
    name: "Parasol Stand",
    price: "Rs. 18,000",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85",
    description: "The Parasol Stand provides essential shade on sunny days. Its sturdy construction and adjustable design make it perfect for protecting yourself from the sun while enjoying the outdoors.",
    category: "Outdoor"
  },
  // Decor & Furnishing
  'handwoven-rug': {
    id: 'handwoven-rug',
    name: "Handwoven Jute Rug",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "The Handwoven Jute Rug adds natural texture to any room. Crafted from sustainable materials, it brings warmth and elegance to your floors.",
    category: "Decor & Furnishing"
  },
  'velvet-cushion-set': {
    id: 'velvet-cushion-set',
    name: "Velvet Cushion Set",
    price: "Rs. 8,500",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85",
    description: "Our Velvet Cushion Set adds a touch of luxury to your sofa or bed. The soft velvet fabric and rich colors create an inviting atmosphere.",
    category: "Decor & Furnishing"
  },
  'linen-curtains': {
    id: 'linen-curtains',
    name: "Linen Curtains",
    price: "Rs. 15,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Linen Curtains offer elegant light control while adding softness to your windows. The natural fabric drapes beautifully for a sophisticated look.",
    category: "Decor & Furnishing"
  },
  'abstract-wall-art': {
    id: 'abstract-wall-art',
    name: "Abstract Wall Art",
    price: "Rs. 22,000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "The Abstract Wall Art features bold colors and dynamic compositions. Its modern design adds visual interest and personality to any room in your home.",
    category: "Decor & Furnishing"
  },
  'floor-lamp': {
    id: 'floor-lamp',
    name: "Floor Lamp",
    price: "Rs. 18,500",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85",
    description: "Our Floor Lamp provides ambient lighting with modern design. The adjustable height and warm tones create the perfect atmosphere for any room.",
    category: "Decor & Furnishing"
  },
  'woven-throw-blanket': {
    id: 'woven-throw-blanket',
    name: "Woven Throw Blanket",
    price: "Rs. 6,500",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85",
    description: "The Woven Throw Blanket adds cozy texture to your sofa or bed. Its soft fabric and beautiful weave pattern provide both warmth and style.",
    category: "Decor & Furnishing"
  },
  'ceramic-vase-set': {
    id: 'ceramic-vase-set',
    name: "Ceramic Vase Set",
    price: "Rs. 12,000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "The Ceramic Vase Set features minimalist designs in complementary colors. Perfect for displaying fresh or dried flowers, they add a touch of elegance to any space.",
    category: "Decor & Furnishing"
  },
  'table-lamp': {
    id: 'table-lamp',
    name: "Table Lamp",
    price: "Rs. 9,500",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85",
    description: "The Table Lamp provides focused lighting for reading or work. Its elegant design and warm glow create a cozy atmosphere on your desk or side table.",
    category: "Decor & Furnishing"
  },
};

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string; price?: string; image?: string }>;
}) {
  const [{ id: productId }, cardDetails] = await Promise.all([params, searchParams]);
  const productName = cardDetails.name?.trim() || productId
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const product = products[productId] ?? {
    id: productId,
    name: productName,
    price: cardDetails.price?.trim() || "Contact for price",
    image: cardDetails.image?.trim() || "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=85",
    description: `${productName} combines considered design, quality materials, and everyday comfort for your home.`,
    category: "Furniture",
  };
  const catalogProducts = Object.entries(products).filter(([id]) => id !== productId);
  const similarProducts = catalogProducts.filter(([, item]) => item.category === product.category);
  const recommendations = (similarProducts.length ? similarProducts : catalogProducts).slice(0, 3);
  const specifications = [
    { label: "Category", value: product.category },
    { label: "Brand", value: "Woodform" },
    { label: "Material", value: "Premium materials" },
    { label: "Dimensions", value: "Standard size" },
    { label: "Care", value: "Professional cleaning recommended" },
    { label: "Warranty", value: "5 years" },
  ];

  return (
    <div className="site-shell">
      <main className="mx-auto max-w-[1440px] px-4 pb-12 pt-6 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#64748b]">
          <a href="/" className="hover:text-[#1e3a8a]">Home</a>
          <ChevronRight size={13} />
          <a href="/shop" className="hover:text-[#1e3a8a]">{product.category}</a>
          <ChevronRight size={13} />
          <span className="text-[#172554]">{product.name}</span>
        </nav>

        <section className="grid gap-5 border-y border-[#e5e0d4] bg-white p-4 sm:p-6 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)_270px]">
          <div className="min-w-0">
            <div className="grid aspect-square max-h-[580px] place-items-center overflow-hidden bg-[#f1efe9]">
              <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
            </div>
            <p className="mt-3 text-xs text-[#64748b]">Product image: {product.name}</p>
          </div>

          <div className="min-w-0 py-1">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#64748b]">
              <BadgeCheck size={15} className="text-[#1e3a8a]" />
              Woodform original
            </div>
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-2xl font-semibold leading-tight text-[#172554] sm:text-3xl">{product.name}</h1>
              <WishlistToggle />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#64748b]">
              <span className="flex items-center gap-0.5 text-[#c89432]" aria-label="No ratings yet">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} />)}
              </span>
              <span>No reviews yet</span>
              <span aria-hidden="true">|</span>
              <a href="#reviews" className="text-[#1e3a8a] hover:underline">Write the first review</a>
            </div>

            <div className="mt-5 border-y border-[#e5e0d4] py-4">
              <p className="text-2xl font-semibold text-[#172554]">{product.price}</p>
              <p className="mt-1 text-xs text-[#64748b]">Inclusive of applicable taxes</p>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#475569]">{product.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-[#334155]">Quantity</span>
              <QuantityStepper />
              <span className="text-xs text-[#64748b]">Available to order</span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a href="/cart" className="inline-flex min-h-11 items-center justify-center bg-[#1e3a8a] px-5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#172554]">Buy now</a>
              <a href="/cart" className="inline-flex min-h-11 items-center justify-center border border-[#1e3a8a] px-5 text-sm font-semibold uppercase tracking-wide text-[#1e3a8a] transition-colors hover:bg-[#eff3ff]">Add to cart</a>
            </div>

            <p className="mt-3 text-xs text-[#64748b]">Need help choosing? <a href="/contact" className="font-semibold text-[#1e3a8a] hover:underline">Talk to a designer</a></p>
          </div>

          <aside className="divide-y divide-[#e5e0d4] border border-[#e5e0d4] px-4 xl:col-span-1 lg:col-span-2 xl:row-span-1">
            <div className="py-4">
              <h2 className="mb-3 text-sm font-semibold text-[#172554]">Delivery &amp; services</h2>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#64748b]" />
                <div className="text-xs leading-5 text-[#475569]">
                  <p className="font-medium text-[#172554]">Check delivery availability</p>
                  <a href="/stores" className="text-[#1e3a8a] hover:underline">Find your nearest store</a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 py-4">
              <Truck size={17} className="mt-0.5 shrink-0 text-[#64748b]" />
              <p className="text-xs leading-5 text-[#475569]">Delivery estimate and charges are confirmed at checkout.</p>
            </div>
            <div className="flex items-start gap-3 py-4">
              <RotateCcw size={17} className="mt-0.5 shrink-0 text-[#64748b]" />
              <p className="text-xs leading-5 text-[#475569]">Contact our team for returns and after-sale support.</p>
            </div>
            <div className="flex items-start gap-3 py-4">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#64748b]" />
              <p className="text-xs leading-5 text-[#475569]">Secure checkout and product warranty support.</p>
            </div>
          </aside>
        </section>

        <nav aria-label="Product information" className="sticky top-0 z-20 mt-6 flex gap-6 overflow-x-auto border-b border-[#d8d5cc] bg-[#faf8f2] px-1 text-sm">
          <a href="#description" className="whitespace-nowrap border-b-2 border-[#1e3a8a] py-3 font-semibold text-[#1e3a8a]">Description</a>
          <a href="#specifications" className="whitespace-nowrap py-3 text-[#475569] hover:text-[#1e3a8a]">Specifications</a>
          <a href="#reviews" className="whitespace-nowrap py-3 text-[#475569] hover:text-[#1e3a8a]">Reviews</a>
          <a href="#questions" className="whitespace-nowrap py-3 text-[#475569] hover:text-[#1e3a8a]">Questions</a>
        </nav>

        <section id="description" className="scroll-mt-16 border-b border-[#e5e0d4] bg-white px-5 py-6 sm:px-8">
          <h2 className="text-base font-semibold text-[#172554]">Product description</h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#475569]">{product.description}</p>
        </section>

        <section id="specifications" className="scroll-mt-16 border-b border-[#e5e0d4] bg-white px-5 py-6 sm:px-8">
          <h2 className="text-base font-semibold text-[#172554]">Specifications</h2>
          <dl className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {specifications.map((specification) => (
              <div key={specification.label} className="grid grid-cols-[minmax(110px,0.7fr)_1fr] gap-4 border-b border-[#efede7] py-3 text-sm">
                <dt className="text-[#64748b]">{specification.label}</dt>
                <dd className="m-0 text-[#172554]">{specification.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="reviews" className="scroll-mt-16 border-b border-[#e5e0d4] bg-white px-5 py-6 sm:px-8">
          <h2 className="text-base font-semibold text-[#172554]">Ratings &amp; reviews</h2>
          <div className="mt-5 grid gap-8 md:grid-cols-[180px_1fr_auto] md:items-center">
            <div className="text-center md:border-r md:border-[#e5e0d4] md:py-3">
              <p className="text-4xl font-light text-[#172554]">0<span className="text-xl text-[#94a3b8]">/5</span></p>
              <div className="mt-2 flex justify-center gap-1 text-[#cbd5e1]">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={17} />)}</div>
              <p className="mt-1 text-xs text-[#64748b]">No ratings yet</p>
            </div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3 text-xs text-[#64748b]">
                  <span className="w-8">{rating} star</span>
                  <div className="h-2 flex-1 bg-[#eeece6]" />
                  <span className="w-5 text-right">0</span>
                </div>
              ))}
            </div>
            <a href="/contact" className="inline-flex min-h-10 items-center justify-center border border-[#1e3a8a] px-4 text-xs font-semibold uppercase tracking-wide text-[#1e3a8a] hover:bg-[#eff3ff]">Write a review</a>
          </div>
          <div className="mt-6 border-t border-[#efede7] py-6 text-center text-sm text-[#64748b]">
            <MessageCircle size={24} className="mx-auto mb-2 text-[#94a3b8]" />
            Be the first to share your experience with this product.
          </div>
        </section>

        <section id="questions" className="scroll-mt-16 border-b border-[#e5e0d4] bg-white px-5 py-6 sm:px-8">
          <h2 className="text-base font-semibold text-[#172554]">Questions about this product</h2>
          <div className="py-8 text-center">
            <CircleHelp size={25} className="mx-auto mb-2 text-[#94a3b8]" />
            <p className="text-sm text-[#475569]">Have a question about {product.name}?</p>
            <a href="/contact" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#1e3a8a] hover:underline">Contact our team <ChevronRight size={13} /></a>
          </div>
        </section>

        <section className="pt-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">You may also like</p>
              <h2 className="text-xl font-semibold text-[#172554]">Similar products</h2>
            </div>
            <a href="/shop" className="text-xs font-semibold text-[#1e3a8a] hover:underline">View all products</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map(([id, item]) => (
              <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} />
            ))}
          </div>
        </section>

        <section className="pt-10">
          <div className="mb-5">
            <p className="eyebrow mb-2">Curated for you</p>
            <h2 className="text-xl font-semibold text-[#172554]">Recommended</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map(([id, item]) => (
              <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
