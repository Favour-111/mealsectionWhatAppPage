import { WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110"
    >
      <WhatsAppIcon size={28} />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
        Order on WhatsApp
      </span>
    </a>
  )
}
