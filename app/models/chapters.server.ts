import qs from 'qs';
import { checkEnvVars, checkStatus } from "~/utils/errorHandling";

export interface Chapter {
  id: number;
  attributes: {
    slug: string;
    title: string;
    subtitle: string;
    introduction: string;
    content: {
      title: string,
      tile: 'big' | 'medium' | 'small',
      gallery: {
        title: string,
        link?: string,
        image: {
          data: {
            attributes: {
              url: string,
            }
          }
        },
      }[],
    };
    links?: {
      title: string,
      link: {
        title: string,
        link: string,
      }[],
    }
  }
}

async function getChaptersFromCms(): Promise<Chapter[]> {
  checkEnvVars();

  const query = qs.stringify({
    fields: ['slug', 'title', 'subtitle'],
  })

  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/portfolios?${query}`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json"
        }
    });

    checkStatus(response);

    const data = await response.json();
        
    if (data.error) {
        throw new Response("Error loading data from strapi", { status: 500 });
    }

    return data.data;
}

async function getChapterFromCms(slug: string): Promise<Chapter[]> {
  checkEnvVars();

  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      }
    },
    populate: ['content', 'content.gallery', 'content.gallery.image', 'content.gallery.image.data', 'links', 'links.link']
  })

  // ${process.env.STRAPI_URL_BASE}/api/portfolios?filters[slug][$eq]=${slug}&populate=%2A`
  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/portfolios?${query}`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json"
        }
    });

    checkStatus(response);

    const data = await response.json();
        
    if (data.error) {
        throw new Response("Error loading data from strapi", { status: 500 });
    }

    return data.data;
}


export async function getChapterListings(activeSlug?: string) {

  const chapters = await getChaptersFromCms();

  return chapters.map(({ attributes }) => ({
     ...attributes, isActive: attributes.slug === activeSlug 
  }))
};

export async function getChapter(slug: string) {
  const data = await getChapterFromCms(slug);
  const chapter = data[0].attributes;

  return chapter;
};
