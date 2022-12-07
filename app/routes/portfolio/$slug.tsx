

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getChapterListings } from "~/models/chapters.server";
import HeroSection from "src/modules/hero-section";
import { Outlet } from "react-router";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { useColorScheme } from "@src/hooks/useColorScheme";

export type ChaptersLoaderData = Awaited<ReturnType<typeof getChapterListings>>

export const loader: LoaderFunction = async ({ params }) => {
  const chapters = await getChapterListings(params?.slug);
  return json<ChaptersLoaderData>(chapters)
}

export default function Index() {
  const chapters = useLoaderData() as ChaptersLoaderData;
  const colorScheme = useColorScheme();


  useEffect(() => {
    const activeChapterIndex  = chapters.findIndex(({isActive}) => isActive);
    colorScheme.toggleColorScheme(activeChapterIndex);
  })

  return (
    <>
      <HeroSection chapters={chapters} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
