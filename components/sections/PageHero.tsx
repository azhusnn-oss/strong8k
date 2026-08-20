import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { GridPattern, GlowOrb } from "@/components/ui/BackgroundFX";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-16 pt-32 sm:pt-40">
      <div className="absolute inset-0">
        <GridPattern className="absolute inset-0 h-full w-full bg-grid-fade" />
        <GlowOrb
          className="absolute left-1/2 top-[-6rem] h-96 w-[42rem] -translate-x-1/2"
          color="brand"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="heading-xl">{title}</h1>
          <p className="body-lg max-w-2xl">{description}</p>
          {actions ? (
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
