import { Outlet } from "@remix-run/react";
import { HeroSection } from "src/components/hero-section";
import { Logo } from "src/components/logo";

export default function Index() {
  return (
    <div>
      {/* <div className="bg-pink h-screen flex flex-col">
        <Logo />
        <HeroSection
          title="Graphic Design"
          subtitle="This is a description providing more information"
        />
      </div> */}

      {/* <div>
        next
      </div> */}
    </div>
  );
}
