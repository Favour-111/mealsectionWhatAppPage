import { ArrowRight } from 'lucide-react'
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import ctaBackground from '../assets/images/cta-background.jpg'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/95 via-ink/80 to-ink/90" />

      <div className="container-x relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your Next Meal Is Just a Message Away.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75">
          Don&rsquo;t wait for the app. Order your favourite meal on WhatsApp today.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-brand hover:bg-white/90"
          >
            <WhatsAppIcon size={18} />
            Order on WhatsApp
            <ArrowRight size={16} />
          </a>
          <a href="#app" className="btn border border-white/40 text-white hover:bg-white/10">
            Learn About the App
          </a>
        </div>
      </div>
    </section>
  )
}
