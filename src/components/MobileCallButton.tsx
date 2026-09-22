import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

export default function MobileCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-amber-500 text-slate-950 font-bold py-4 flex items-center justify-center gap-2.5 shadow-2xl shadow-black/30 active:bg-amber-400 transition-colors"
    >
      <Phone className="w-5 h-5 animate-pulse" strokeWidth={2.5} />
      <span className="text-base">Call Now — {SITE.phone}</span>
    </a>
  );
}
