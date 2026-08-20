import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function InfoCard({ title, children }: Props) {
  return (
    <div className="card p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
    </div>
  );
}
