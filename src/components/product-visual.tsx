import { cn } from "@/lib/utils";

type ProductVisualProps = {
  name: string;
  accent?: "red" | "green" | "gold";
};

export function ProductVisual({ name, accent = "red" }: ProductVisualProps) {
  return (
    <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-md border border-line bg-mist p-8">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-white" />
      <div
        className={cn(
          "relative flex h-56 w-32 flex-col justify-between rounded-md border border-black/10 p-4 text-white shadow-soft",
          accent === "red" && "bg-hezpo-red",
          accent === "green" && "bg-hezpo-green",
          accent === "gold" && "bg-hezpo-gold"
        )}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Hezpo</p>
          <p className="mt-4 text-xl font-black leading-6">{name}</p>
        </div>
        <p className="text-xs font-semibold text-white/80">Product image area</p>
      </div>
    </div>
  );
}
