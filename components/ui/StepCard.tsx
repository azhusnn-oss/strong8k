type Props = {
  index: number;
  title: string;
  description: string;
};

export function StepCard({ index, title, description }: Props) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-600 text-sm font-bold text-ink-900 shadow-glow">
          {index}
        </div>
        <div className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-brand-500/40 to-transparent last:hidden" />
      </div>
      <div className="pb-8">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
