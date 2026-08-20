export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-[11px] font-bold text-brand-300">
            {i + 1}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
}
