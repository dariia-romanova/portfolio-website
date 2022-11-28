import { Link } from "@remix-run/react";

export default function PortfolioIndexRoute() {
  return (
    <div className="text-center flex flex-col align-center justify-center h-screen">
      Loading
      <Link to="graphic-design" prefetch="intent">start</Link>
    </div>
  )
};
