'use client';

import { useParams } from 'next/navigation';
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

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
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
    description: "The Mara Oak Bed offers timeless elegance with solid oak construction. Featuring a comfortable headboard and sturdy frame, it creates a serene sanctuary for restful sleep.",
    category: "Bedroom"
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
  'oak-display-cabinet': {
    id: 'oak-display-cabinet',
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
  'oak-file-cabinet': {
    id: 'oak-file-cabinet',
    name: "Oak File Cabinet",
    price: "Rs. 32,000",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    description: "The Oak File Cabinet offers secure storage for documents and office supplies. Its lockable drawers and solid construction keep your important papers safe and organized.",
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
    image: "https://images.unsplash.com/photo-1600210491363-e6c8fc5e87c0?auto=format&fit=crop&w=1400&q=85",
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
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1b?auto=format&fit=crop&w=1400&q=85",
    description: "Our Outdoor Swing adds charm to any patio or garden. The sturdy construction and comfortable seating make it a favorite spot for relaxation.",
    category: "Outdoor"
  },
  'aluminum-bistro-set': {
    id: 'aluminum-bistro-set',
    name: "Aluminum Bistro Set",
    price: "Rs. 55,000",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1400&q=85",
    description: "The Aluminum Bistro Set is perfect for intimate outdoor dining. Its lightweight yet durable aluminum construction makes it easy to move and rearrange.",
    category: "Outdoor"
  },
  'teak-coffee-table': {
    id: 'teak-coffee-table',
    name: "Teak Coffee Table",
    price: "Rs. 45,000",
    image: "https://images.unsplash.com/photo-1600210491363-e6c8fc5e87c0?auto=format&fit=crop&w=1400&q=85",
    description: "The Teak Coffee Table is crafted from durable teak wood that naturally resists weather. Its simple design complements any outdoor seating arrangement.",
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

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId];

  if (!product) {
    return (
      <div className="site-shell">
        <main className="section">
          <h1>Product not found</h1>
          <a href="/shop" className="text-link">Return to shop <Arrow /></a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <main>
        <section className="section">
          <a href="/shop" className="text-link mb-8 inline-block">← Back to shop</a>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">
                <TypeMorph
                  config={{
                    text: "ANIMDOCK",
                    target: product.name,
                    morph: true,
                    speed: { mode: 'static', value: 2 },
                    variants: { mode: 'static', value: 15 },
                    color: "#000000"
                  }}
                />
              </h1>
              <p className="text-2xl font-semibold text-[#1e3a8a] mb-8">{product.price}</p>
              <p className="text-black leading-relaxed mb-8">{product.description}</p>
              
              <div className="flex gap-4 mb-8">
                <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-sm hover:bg-[#2563eb] transition-colors font-semibold">
                  BUY NOW
                </button>
                <button className="border border-[#1e3a8a] text-[#1e3a8a] px-8 py-4 rounded-sm hover:bg-[#1e3a8a] hover:text-white transition-colors">
                  Add to Cart
                </button>
                <button className="border border-[#1e3a8a] text-[#1e3a8a] px-4 py-4 rounded-sm hover:bg-[#1e3a8a] hover:text-white transition-colors">
                  ♡
                </button>
              </div>

              <div className="border-t border-[#e5e0d4] pt-8">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-black mb-2">Material</p>
                    <p className="text-black">Premium fabric</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Dimensions</p>
                    <p className="text-black">Standard size</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Care</p>
                    <p className="text-black">Professional cleaning recommended</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Warranty</p>
                    <p className="text-black">5 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="section">
          <div className="section-heading">
            <div><p className="eyebrow">You might also like</p><h2>Similar Products</h2></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(products)
              .filter(([id, p]) => id !== productId && p.category === product.category)
              .slice(0, 3)
              .map(([id, item]) => (
                <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} />
              ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="section">
          <div className="section-heading">
            <div><p className="eyebrow">Curated for you</p><h2>Recommended</h2></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(products)
              .filter(([id]) => id !== productId)
              .slice(0, 3)
              .map(([id, item]) => (
                <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} />
              ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
