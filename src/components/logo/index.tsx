import { Link } from "@remix-run/react";

export const Logo = () => {
  return (
    <Link to="/" className="font-serif lg:text-lg text-sm md:text-basic text-pink">
      <span className="font-bold">_</span>
      dashimi
    </Link>
  );
};
