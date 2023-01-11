import { HeroImageDecoration1 } from "@src/assets/svg/hero-image-decoration-1";
import { HeroImageDecoration2 } from "@src/assets/svg/hero-image-decoration-2";
import { HeroImageDecoration3 } from "@src/assets/svg/hero-image-decoration-3";
import { ArrowButton } from "@src/components/arrow-button";
import { Container } from "@src/components/container";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";

export const Footer = () => {
  const { colorScheme: { mainColor } } = useColorScheme();
  let year =  new Date().getFullYear();

  return (
    <footer className="relative lg:py-16 md:py-8 py-4">
    <Container>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <p className="mr-4 font-serif lg:text-md sm:text-smd text-sm">More Categories</p>
          <ArrowButton url='../' direction="up" />
        </div>

        <p className="font-serif lg:text-md sm:text-smd text-sm">
          {year}
        </p>
        
          {mainColor === SchemeColors.First && 'text-firstColor' ? (
            <>
              <div className="md:block hidden absolute -bottom-8 right-0 z-10">
                <HeroImageDecoration1 width={500} height={300} />
              </div>
            </>
          ) : mainColor === SchemeColors.Second ? (
            <div className="md:block hidden absolute -bottom-20 right-0 z-10">
              <HeroImageDecoration2 width={360} height={360} />
            </div>
          ) : (
            <div className="md:block hidden absolute -bottom-8 right-0 z-10">
              <HeroImageDecoration3 width={300} height={280} />
            </div>
          )}
        </div>
    </Container>
  </footer>
  );
};
