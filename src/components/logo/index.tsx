import { Container } from "../container"

export const Logo = () => {
  return (
    <header className="xl:py-16 lg:py-10 sm:py-6 py-3 md:bg-transparent bg-basic">
      <Container>
        <p className="font-serif lg:text-lg text-sm md:text-basic text-pink">
          <span className="font-bold">_</span>
          dashimi
        </p>
      </Container>
    </header>
  );
};
