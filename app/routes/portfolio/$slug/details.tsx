import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Container } from "@src/components/container";
import { H2 } from "@src/components/h2/h2";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { Footer } from "@src/modules/details-page/footer";
import { Gallery } from "@src/modules/details-page/gallery/gallery";
import { Links } from "@src/modules/details-page/links/links";
import { SchemeColors } from "@src/utils.tsx/colorScemes";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { getChapter } from "~/models/chapters.server";

type LoaderData = Awaited<ReturnType<typeof getChapter>>

export const loader: LoaderFunction = async ({ params }) => {
  const chapter = await getChapter(params?.slug || '');

  return json<LoaderData>(chapter);
}

export default function DetailsRoute() {
  const chapter = useLoaderData() as LoaderData;

  const { colorScheme: { mainColor } } = useColorScheme();

  const pageStart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = pageStart.current;
    if (element) {
      element.scrollIntoView();
    }
  })

  //handle errors
  if (!chapter) {
    return (
      <></>
    );
  };

  const { introduction, content: { title } } = chapter;


  return (
    <div className="overflow-hidden">
      <section className="lg:pt-24 md:pt-16 pt-8" ref={pageStart}>
        <Container>
          <div className="lg:mb-24 md:mb-16 mb-8 font-serif xl:text-lg sm:text-md text-sm text-black lg:w-2/3">
            {introduction}
          </div>

          <H2
            title={title}
            className={clsx(
              'md:text-left text-center',
              mainColor === SchemeColors.First && 'text-firstColor',
              mainColor === SchemeColors.Second && 'text-secondColor',
              mainColor === SchemeColors.Third && 'text-thirdColor',
            )}
          />

          <Gallery />
        </Container>

        <Links />
      </section>

      <Footer />
    </div>
  );
};