// Shared navigation types — no "use client" or "use server" directive.
// Imported by both the server component and the client component.

export type MegaMenuLink = {
  id: number;
  label: string;
  href: string;
  order: number;
};

export type MegaMenuColumn = {
  id: number;
  heading: string;
  order: number;
  links: MegaMenuLink[];
};

export type MegaMenuPanel = {
  description_heading: string;
  description_text: string;
  card_label: string;
  card_title: string;
  card_subtitle: string;
  card_href: string;
  card_image_url: string | null;
};

export type NavItem = {
  id: number;
  label: string;
  href: string;
  order: number;
  columns: MegaMenuColumn[];
  panel: MegaMenuPanel | null;
};
