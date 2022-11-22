// import { Outlet } from "@remix-run/react";
import { HeroSection } from "src/components/hero-section";
import { Logo } from "src/components/logo";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

type LoaderData = {
  id: number;
  title: string;
  description: string;
} | null;

export const loader: LoaderFunction = ({ params }) => {
  if (params.slug === 'graphic-design') {
    return json<LoaderData>({
      id: 0,
      title: 'Graphic design',
      description: 'This is a description about graphic design providing more information',
    })
  }

  if (params.slug === 'web-development') {
    return json<LoaderData>({
      id: 1,
      title: 'Web development',
      description: 'This is a description about web development providing more information',
    })
  }

  if (params.slug === 'motion-design') {
    return json<LoaderData>({
      id: 1,
      title: 'Motion design',
      description: 'This is a description about motion design providing more information',
    })
  }

  return null;
}

export default function Index() {
  const data = useLoaderData() as LoaderData;

  if (!data) {
    return (<>Ops</>)
  }

  return (
    <div>
      <div className="bg-pink h-screen flex flex-col">
        <Logo />
          <HeroSection
              title={data.title}
              subtitle={data.description}
            />

            {/* <Link to="../motion-design">link</Link> */}
      </div>
  </div>
  );
}
