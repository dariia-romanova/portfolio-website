import { Container } from "src/components/container";
import { Logo } from "src/components/logo";


export const HeroLogo = () => {
  return (
    <div className="xl:py-16 lg:py-10 sm:py-6 py-3 md:bg-transparent bg-basic">
      <Container>
        <Logo />
      </Container>
    </div>
  );
};
