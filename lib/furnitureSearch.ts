export type FurnitureProduct = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  image?: string;
  href?: string;
};

const SYNONYMS: Record<string, string[]> = {
  sofa: ["sofa", "sofas", "couch", "couches", "settee"],
  chair: ["chair", "chairs", "stool", "stools", "armchair", "armchairs"],
  table: ["table", "tables", "desk", "desks"],
  bed: ["bed", "beds", "bedstead", "bedsteads"],
  wardrobe: ["wardrobe", "wardrobes", "closet", "closets"],
  cabinet: ["cabinet", "cabinets", "cupboard", "cupboards"],
  shelf: ["shelf", "shelves", "bookcase", "bookcases"],
  lamp: ["lamp", "lamps", "lighting", "light"],
  drawer: ["drawer", "drawers", "dresser", "dressers"],
  dining: ["dining", "dining table", "dining tables"],
};

function normalize(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function singularize(word: string): string {
  if (word.endsWith("ies") && word.length > 3) {
    return word.slice(0, -3) + "y";
  }

  if (
    word.endsWith("es") &&
    /(ses|xes|zes|ches|shes)$/.test(word)
  ) {
    return word.slice(0, -2);
  }

  if (word.endsWith("s") && !word.endsWith("ss")) {
    return word.slice(0, -1);
  }

  return word;
}

function expandTerm(term: string): string[] {
  const normalized = normalize(term);

  if (!normalized) return [];

  const words = normalized.split(" ");
  const expanded = new Set<string>([normalized]);

  for (const word of words) {
    const singular = singularize(word);
    expanded.add(singular);

    for (const [canonical, variants] of Object.entries(SYNONYMS)) {
      if (
        variants.some((variant) => normalize(variant) === word) ||
        canonical === singular
      ) {
        expanded.add(canonical);
        variants.forEach((variant) =>
          expanded.add(normalize(variant))
        );
      }
    }
  }

  return [...expanded];
}

export function searchFurniture<T extends FurnitureProduct>(
  products: T[],
  query: string
): T[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) return [];

  const queryTerms = normalizedQuery
    .split(" ")
    .filter(Boolean);

  const expandedTerms = expandTerm(normalizedQuery);

  return products
    .map((product) => {
      const name = normalize(product.name);
      const category = normalize(product.category);
      const description = normalize(product.description ?? "");
      const searchable = `${name} ${category} ${description}`;

      const productWords = searchable.split(" ");
      const canonicalQuery = queryTerms.map(singularize);

      const categoryMatch = expandedTerms.some(
        (term) =>
          category === term ||
          category.split(" ").some(
            (word) => singularize(word) === singularize(term)
          )
      );

      const nameMatch = expandedTerms.some(
        (term) => name.includes(term)
      );

      const allWordsMatch = canonicalQuery.every((term) =>
        productWords.some((word) => singularize(word) === term)
      );

      const partialMatch = queryTerms.every((term) =>
        productWords.some((word) => word.startsWith(term))
      );

      let score = 0;

      if (name === normalizedQuery) score += 100;
      if (category === normalizedQuery) score += 90;
      if (categoryMatch) score += 70;
      if (nameMatch) score += 50;
      if (allWordsMatch) score += 30;
      if (partialMatch) score += 10;

      return { product, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ product }) => product);
}
