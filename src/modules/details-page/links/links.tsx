import { useLoaderData } from "@remix-run/react";
import { Container } from "@src/components/container";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";
import clsx from "clsx"
import type { getChapter } from "~/models/chapters.server";

type LoaderData = Awaited<ReturnType<typeof getChapter>>

export const Links = () => {
  const chapter = useLoaderData() as LoaderData;
 
  const { links } = chapter;
  const { colorScheme: { secondaryColor } } = useColorScheme();

  if (!links) {
    return null;
  }
 
  return (
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
  )
}