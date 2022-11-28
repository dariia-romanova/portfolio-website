export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  color: 'pink' | 'green' | 'blue';
}

const chapters: Chapter[] = [
  {
    id: 0,
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'This is a description about graphic design providing more information',
    color: 'pink',
  },
  {
    id: 1,
    slug: 'web-development',
    title: 'Web Development',
    description: 'This is a description about web development providing more information',
    color: 'green',
  },
  {
    id: 2,
    slug: 'motion-design',
    title: 'Motion Design',
    description: 'This is a description about motion design providing more information',
    color: 'blue',
  },
]

export function getChapterListings(activeSlug?: string) {
  return chapters.map(({ id, slug, title, color, description }) => ({
    id, slug, title, color, description, isActive: slug === activeSlug,
  }))
};

export function getChapter(activeSlug?: string) {
  console.log('active slug', activeSlug)
  return chapters.find(({ slug }) => slug === activeSlug);
};
