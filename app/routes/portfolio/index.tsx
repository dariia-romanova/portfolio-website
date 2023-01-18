import { Link } from "@remix-run/react";
import { LoadingImage } from "@src/modules/loading-page/loading-image";

export default function PortfolioIndexRoute() {
  return (
    <Link to="graphic-design" prefetch="intent" className="text-center flex flex-col align-center justify-center h-screen">
      <LoadingImage />
      <div className="md:mt-16 mt-8 text-black font-serif xl:text-lg sm:text-md text-sm">
        Click to start
      </div>
    </Link>
  )
};
