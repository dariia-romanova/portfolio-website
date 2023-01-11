import { useLoaderData } from "@remix-run/react";
import clsx from "clsx"
import type { getChapter } from "~/models/chapters.server";
import url from '~/utils/url';

type LoaderData = Awaited<ReturnType<typeof getChapter>>

export const Gallery = () => {
  const chapter = useLoaderData() as LoaderData;
 
  const { content: { tile, gallery }} = chapter;
 
  return (
    <ul className={clsx(
      'flex after:block md:gap-y-12 gap-y-6 lg:mb-24 md:mb-16 mb-8 w-full flex-wrap',
      tile === 'big' && 'justify-between after:flex-1',
      tile === 'medium' && 'justify-center md:gap-x-12 gap-x-6',
      tile === 'small' && 'justify-center md:gap-x-12 gap-x-6',
    )}>
      {gallery.map(({ image: { data }, title: itemTitle, link }) => (
        <li key={itemTitle}
          className={clsx(
            tile === 'big' && 'lg:w-[48%] w-full',
          )}
        >
          <a href={link} target="_blank" rel="noreferrer">
            {data?.attributes && (
            <div className={clsx(
              "lg:mb-6 md:mb-4 mb-2 overflow-hidden flex items-center justify-center",
              tile === 'big' && 'md:h-[400px] h-[300px]',
              tile === 'medium' && 'max-h-[300px] max-w-[400px] w-full',
              tile === 'small' && 'md:h-[150px] h-[120px]',
            )}>
              <img alt={itemTitle} src={`${url}${data?.attributes.url}`} className="object-cover w-full h-full" />
            </div>
            )}
            <p
              className={clsx(
                'font-serif lg:text-md sm:text-smd text-sm',
                tile === 'small' && 'text-center',
              )}>
                {itemTitle}
              </p>
          </a>
        </li>
      ))}
    </ul>
  )
}