import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function StickyBottomBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <a
          href={whatsappLink(siteConfig.whatsappTemplates.availability)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.526 5.852L.057 23.215a.75.75 0 00.92.92l5.355-1.473A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-4.951-1.356l-.355-.212-3.678 1.012 1.003-3.596-.232-.372A9.715 9.715 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Book on WhatsApp
        </a>
        <a
          href={siteConfig.mapDirectionsUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-600 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.843-5.147 3.843-9.123a8.13 8.13 0 10-16.26 0c0 3.976 1.899 7.044 3.843 9.123a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
          </svg>
          Get Directions
        </a>
      </div>
    </nav>
  );
}
