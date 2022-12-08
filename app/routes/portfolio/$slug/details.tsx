import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ArrowButton } from "@src/components/arrow-button";
import { Container } from "@src/components/container";
import { H2 } from "@src/components/h2/h2";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { getChapter } from "~/models/chapters.server";
import url from '~/utils/url';

type LoaderData = Awaited<ReturnType<typeof getChapter>>

export const loader: LoaderFunction = async ({ params }) => {
  const chapter = await getChapter(params?.slug || '');

  return json<LoaderData>(chapter);
}

export default function DetailsRoute() {
  const chapter = useLoaderData() as LoaderData;

  const { colorScheme: { mainColor, secondaryColor } } = useColorScheme();

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

  const { introduction, content: { title, tile, gallery }, links } = chapter;


  return (
    <>
      <section className="lg:pt-24 md:pt-16 pt-8" ref={pageStart}>
        <Container>
          <div className="lg:mb-24 md:mb-16 mb-8 font-serif xl:text-lg sm:text-md text-sm text-black lg:w-2/3">
            {introduction}
          </div>

          <H2
            title={title}
            className={clsx(
              mainColor === SchemeColors.First && 'text-firstColor',
              mainColor === SchemeColors.Second && 'text-secondColor',
              mainColor === SchemeColors.Third && 'text-thirdColor',
            )}
          />

          <ul className={clsx(
            'grid lg:gap-8 lg:mb-24 md:mb-16 mb-8',
            tile === 'big' && 'lg:grid-cols-2 grid-cols-1',
            tile === 'medium' && 'lg:grid-cols-3 grid-cols-2',
            tile === 'small' && 'xl:grid-cols-6 lg:grid-cols-5 grid-cols-3',
          )}>
            {gallery.map(({ image, title: itemTitle }) => (
              <li key={itemTitle}>
                <div className="lg:mb-6 md:mb-4 mb-2">
                  <img alt={itemTitle} src={`${url}${image.data.attributes.url}`} />
                </div>
                <p className="font-serif lg:text-md sm:text-smd text-sm">{itemTitle}</p>
              </li>
            ))}
          </ul>
        </Container>

        {links && (
          <div className={
            clsx(
              'lg:py-12 md:py-8 py-8',
              secondaryColor === SchemeColors.First && 'bg-firstColor',
              secondaryColor === SchemeColors.Second && 'bg-secondColor',
              secondaryColor === SchemeColors.Third && 'bg-thirdColor',
            )
          }>
            <Container>
              <div className="flex">
                <h3 className="xl:mr-12 lg:mr-8 mr-4 text-basic xl:text-lg sm:text-md text-sm">{`${links.title}:`}</h3>

                <ul className="flex">
                  {links?.link.map(({ link, title }) => (
                    <li key={title}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-basic after:block after:w-full after:h-0.5 after:bg-basic xl:text-lg sm:text-md text-sm"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </div>
        )}
      </section>

      <footer className="lg:py-16 md:py-8 py-4">
        <Container>
          <div className="w-full flex justify-between">
            <div className="flex items-center">
              <p className="mr-4 font-serif lg:text-md sm:text-smd text-sm">More Categories</p>
              <ArrowButton url='../' direction="up" />
            </div>

            <p className="font-serif lg:text-md sm:text-smd text-sm">2022</p>
          </div>
        </Container>
      </footer>
    </>
  );
};