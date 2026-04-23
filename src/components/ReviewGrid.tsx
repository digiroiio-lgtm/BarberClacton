import { testimonials } from "@/data/content";

export function ReviewGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((review) => (
        <article key={review.name} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-amber-400">★★★★★</p>
          <p className="mt-3 text-sm text-zinc-200">“{review.quote}”</p>
          <p className="mt-3 text-xs text-zinc-400">{review.name}</p>
        </article>
      ))}
    </div>
  );
}
