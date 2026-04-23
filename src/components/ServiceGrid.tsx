import Link from "next/link";
import type { Service } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article key={service.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
          <p className="mt-2 text-sm text-zinc-300">{service.short}</p>
          <p className="mt-3 text-xs text-zinc-400">
            {service.duration} • {service.price}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Link className="text-amber-400 hover:text-amber-300" href={`/services/${service.slug}`}>
              View details
            </Link>
            <a className="text-emerald-400 hover:text-emerald-300" href={whatsappLink(`Hi, I'd like to book ${service.name}.`)}>
              Book on WhatsApp
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
