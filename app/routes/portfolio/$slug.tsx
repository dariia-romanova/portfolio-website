

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getChapterListings } from "~/models/chapters.server";
import HeroSection from "src/modules/hero-section";

type LoaderData = ReturnType<typeof getChapterListings>

export const loader: LoaderFunction = ({ params }) => {
  const chaptersList = getChapterListings(params?.slug);

  return json<LoaderData>(chaptersList)
}

export default function Index() {

  return (
    <>
      <HeroSection />
    </>
  );
}
