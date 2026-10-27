# QA Test Matrix - lc_furniture E-Commerce Website

## Project Inventory

### Frontend Routes (Discovered)
1. `/` - Homepage
2. `/sofas` - Sofas category page
3. `/bedroom` - Bedroom category page
4. `/dining` - Dining category page
5. `/living-room` - Living room category page
6. `/storage` - Storage category page
7. `/mattress` - Mattress category page
8. `/study-office` - Study & Office category page
9. `/outdoor` - Outdoor category page
10. `/[category]/[subcategory]` - Dynamic subcategory pages
11. `/shop` - Shop page
12. `/search` - Search page
13. `/product/[id]` - Product detail page
14. `/blog` - Blog page
15. `/contact` - Contact page
16. `/cart` - Cart page
17. `/wishlist` - Wishlist page
18. `/profile` - User profile page
19. `/stores` - Stores page

### Backend API Endpoints
1. `/api/v1/categories/` - List categories
2. `/api/v1/categories/{id}/` - Category detail
3. `/api/v1/categories/{id}/products/` - Category products
4. `/api/v1/products/` - List products
5. `/api/v1/products/{id}/` - Product detail
6. `/api/v1/products/featured/` - Featured products
7. `/api/v1/products/trending/` - Trending products
8. `/api/v1/products/new_arrivals/` - New arrivals
9. `/api/v1/products/search/?q={query}` - Search products
10. `/api/v1/banners/` - List banners
11. `/api/v1/navigation/` - Navigation structure
12. `/api/v1/homepage/` - Homepage sections
13. `/api/v1/articles/` - List articles
14. `/api/v1/articles/{id}/` - Article detail
15. `/api/v1/settings/` - Site settings
16. `/api/v1/footer/` - Footer links
17. `/api/v1/sale-banner/` - Sale banner
18. `/api/v1/stores/` - Store locations

### Technology Stack
- Frontend: Next.js 15.5.27, React 19, TypeScript, Tailwind CSS, Framer Motion
- Backend: Django 6.1.2, DRF, SQLite, Redis (with LocMemCache fallback)
- Caching: Redis server-side + Next.js revalidation client-side
- Media: Cloudinary (configurable) with local filesystem fallback

### CMS Models
- Category, Product, ProductImage, Banner, NavigationItem, HomePageSection, Article, SiteSettings, FooterLinkGroup, FooterLink, SaleBanner, Store

## Test Matrix

| ID | Page/Feature | Test Scenario | Preconditions | Expected Result | Status | Severity | Evidence |
|----|--------------|--------------|----------------|----------------|--------|----------|----------|
| F1 | Homepage | Page loads successfully | Django running | Homepage displays with all sections | | | | |
| F2 | Homepage | No errors in console | Fresh load | No JavaScript errors | | | | |
| F3 | Homepage | Navigation works | Navbar functional | Links work correctly | | | | |
| F4 | Homepage | Featured products display | Products exist | Products shown or empty state | | | | |
| F5 | Homepage | Sale marquee displays | Sale banner exists | Text scrolling correctly | | | | |
| F6 | Homepage | Hero section displays | Hero component | Images and text visible | | | | |
| F7 | Homepage | Newsletter form | Email validation | Valid email shows success message | | | | |
| F8 | Sofas page | Page loads | Django running | Sofas page displays | | | | |
| F9 | Sofas page | API data integration | Category data in DB | Shows API or fallback data | | | | |
| F10 | Bedroom page | Page loads | Django running | Bedroom page displays | | | |
| F11 | Dining page | Page loads | Django running | Dining page displays | | | |
| F12 | Living-room page | Page loads | Django running | Living room page displays | | | |
| F13 | Storage page | Page loads | Django running | Storage page displays | | | |
| F14 | Mattress page | Page loads | Django running | Mattress page displays | | | |
| F15 | Study-office page | Page loads | Django running | Study office page displays | | | |
| F16 | Outdoor page | Page loads | Django running | Outdoor page displays | | | |
| F17 | Shop page | Page loads | Django running | Shop page displays | | | | |
| F18 | Search page | Page loads | Django running | Search page displays | | | | |
| F19 | Product detail | Valid product ID | Product exists | Product details display | | | | |
| F20 | Product detail | Invalid product ID | Non-existent ID | 404 or appropriate error | | | | |
| F21 | Blog page | Page loads | Django running | Blog page displays | | | | |
| F22 | Contact page | Page loads | Django running | Contact page displays | | | | |
| F23 | Cart page | Page loads | Django running | Cart page displays | | | |
| F24 | Wishlist page | Page loads | Django running | Wishlist page displays | | | |
| F25 | Profile page | Page loads | Django running | Profile page displays | | | |
| F26 | Stores page | Page loads | Django running | Stores page displays | | | |
| F27 | Subcategory pages | Dynamic routing | Valid category/subcategory | Page displays correctly | | | | |
| CMS1 | Categories API | GET /api/v1/categories/ | Django running | Returns category list | | | | |
| CMS2 | Products API | GET /api/v1/products/ | Django running | Returns product list | | | | |
| CMS3 | Navigation API | GET /api/v1/navigation/ | Django running | Returns navigation | | | | |
| CMS4 | Settings API | GET /api/v1/settings/ | Django running | Returns settings | | | |
| CMS5 | Footer API | GET /api/v1/footer/ | Django running | Returns footer | | | | |
| CMS6 | Create product | Admin create product | Admin access | Product created | | | | |
| CMS7 | Edit product | Admin edit product | Product exists | Frontend reflects change | | | | |
| CMS8 | Edit category | Admin edit category | Category exists | Frontend reflects change | | | | |
| CMS9 | Edit navigation | Admin edit navigation | Nav item exists | Frontend reflects change | | | |
| CMS10 | Edit settings | Admin edit settings | Settings exist | Frontend reflects change | | | |
| CMS11 | Banner updates | Admin edit banner | Banner exists | Frontend reflects change | | | | |
| CMS12 | Cache invalidation | Admin change updates | Redis/LocMemCache | Cache invalidated | | | | |
| API1 | Categories endpoint | GET request | Categories exist | 200 OK + JSON | | | | |
| API2 | Products endpoint | GET request | Products exist | 200 OK + JSON | | | | |
| API3 | Product detail | GET /products/{id}/ | Product exists | 200 OK + JSON | | | | |
| API4 | Search endpoint | GET /products/search/ | Search term exists | 200 OK + results | | | | |
| API5 | Featured endpoint | GET /products/featured/ | Featured products | 200 OK + JSON | | | | |
| API6 | Banners endpoint | GET /banners/ | Banners exist | 200 OK + JSON | | | | |
| API7 | Settings endpoint | GET /settings/ | Settings exist | 200 OK + JSON | | | |
| API8 | Navigation endpoint | GET /navigation/ | Navigation exists | 200 OK + JSON | | | | |
| API9 | Invalid ID | GET /products/99999/ | Invalid ID | 404 Not Found | | | | |
| API10 | POST restriction | POST /categories/ | Read-only API | 405 Method Not Allowed | | | |
| SEC1 | Secrets check | Check .env files | No secrets in code | PASS | | | |
| SEC2 | CORS config | Check settings.py | Correct origins | PASS | | | |
| SEC3 | CSRF protection | Check settings.py | Enabled | PASS | | | |
| PERF1 | Django tests | manage.py test | Tests pass | PASS | | | |
| PERF2 | Next.js build | npm run build | Build succeeds | PASS | | | |
| PERF3 | Redis tests | check_redis_cache.py | Tests pass | PASS | | | |
