import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={cn("heading-lg", align === "center" && "max-w-3xl")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("body-lg", align === "center" && "max-w-2xl")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
