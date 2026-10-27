const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface ApiResponse<T> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: T[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  order: number;
  parent: number | null;
  icon: string;
  is_active: boolean;
}

export interface NavigationItem {
  id: number;
  label: string;
  url: string;
  parent: number | null;
  order: number;
  is_active: boolean;
  mega_menu_enabled: boolean;
  mega_menu_image: string | null;
  mega_menu_image_url: string | null;
  mega_menu_description: string;
  subcategories: string[];
  children: NavigationItem[];
}

export interface Banner {
  id: number;
  title: string;
  image: string;
  mobile_image: string | null;
  link_url: string;
  alt_text: string;
  banner_type: string;
  position: number;
  is_active: boolean;
  start_date: string | null;
  end_date: string | null;
  label: string;
  tagline: string;
}

export interface SiteSettings {
  id: number;
  site_name: string;
  logo: string | null;
  logo_url: string | null;
  favicon: string | null;
  favicon_url: string | null;
  contact_email: string;
  contact_phone: string;
  address: string;
  social_media_links: Record<string, string>;
  seo_defaults: Record<string, any>;
  announcement_banner: string;
  announcement_active: boolean;
}

export interface FooterLink {
  id: number;
  label: string;
  url: string;
  order: number;
}

export interface FooterLinkGroup {
  id: number;
  title: string;
  order: number;
  links: FooterLink[];
}

export interface SaleBanner {
  id: number;
  text: string;
  discount_percentage: number;
  is_active: boolean;
  start_date: string | null;
  end_date: string | null;
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
  revalidate: number | false = 300 // 5 minutes default cache
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    next: {
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  // Site Settings - Cache for 1 hour (rarely changes)
  getSiteSettings: () => fetchAPI<SiteSettings>('/settings/', {}, 3600),

  // Navigation - Cache for 1 hour (rarely changes)
  getNavigation: () => fetchAPI<ApiResponse<NavigationItem>>('/navigation/', {}, 3600),

  // Banners - Cache for 5 minutes (marketing changes)
  getBanners: (type?: string) => {
    const params = type ? `?banner_type=${type}` : '';
    return fetchAPI<ApiResponse<Banner>>(`/banners/${params}`, {}, 300);
  },

  // Footer - Cache for 1 hour (rarely changes)
  getFooter: () => fetchAPI<ApiResponse<FooterLinkGroup>>('/footer/', {}, 3600),

  // Sale Banner - Cache for 5 minutes (marketing changes)
  getSaleBanner: () => fetchAPI<SaleBanner>('/sale-banner/', {}, 300),

  // Categories - Cache for 1 hour (rarely changes)
  getCategories: () => fetchAPI<ApiResponse<Category>>('/categories/', {}, 3600),
  getCategory: (id: number) => fetchAPI<Category>(`/categories/${id}/`, {}, 3600),
  getCategoryProducts: (id: number) => fetchAPI<ApiResponse<any>>(`/categories/${id}/products/`, {}, 300),
};
