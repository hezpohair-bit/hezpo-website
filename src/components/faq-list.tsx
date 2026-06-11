type FAQItem = {
  q: string;
  a: string;
};

export function FAQList({ items }: { items: readonly FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details className="group rounded-md border border-line bg-white p-5" key={item.q}>
          <summary className="cursor-pointer list-none text-base font-bold text-ink">
            {item.q}
          </summary>
          <p className="mt-3 text-sm leading-6 text-charcoal/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
