import { checkEnvVars, checkStatus } from "~/utils/errorHandling";

export interface Chapter {
  id: number;
  attributes: {
    slug: string;
    title: string;
    subtitle: string;
  }
}

async function getChaptersFromCms(): Promise<Chapter[]> {
  checkEnvVars();

  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/portfolios`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json"
        }
    });

    console.log('response', response)

    checkStatus(response);

    const data = await response.json();
        
    if (data.error) {
        throw new Response("Error loading data from strapi", { status: 500 });
    }

    return data.data;
}


export async function getChapterListings(activeSlug?: string) {

  const chapters = await getChaptersFromCms();

  return chapters.map(({ id, attributes: { slug, title, subtitle } }) => ({
    id, slug, title, subtitle, isActive: slug === activeSlug,
  }))
};

export function getChapter(activeSlug?: string) {
  // return chapters.find(({ slug }) => slug === activeSlug); 
};
