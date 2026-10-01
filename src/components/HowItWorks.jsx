import { CheckCircle2, ArrowRight } from 'lucide-react'
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import WhatsAppIcon from './icons/WhatsAppIcon'
import Reveal from './Reveal'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-tint py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
        <span className="pill">How to Order</span>
        <h2 className="mt-5 max-w-lg text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Want Food Now?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
          Our app is coming soon. Until then, ordering is as easy as sending us a
          WhatsApp message.
        </p>

        <a href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 inline-flex">
          Start My Order
          <ArrowRight size={16} />
        </a>
        </Reveal>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden justify-between px-[16%] lg:flex">
            <ArrowRight className="text-brand/30" size={28} />
            <ArrowRight className="text-brand/30" size={28} />
          </div>

          <Reveal delay={0.0} direction="up" className="relative rounded-2xl border border-line bg-white p-7 shadow-soft">
            <span className="absolute -top-4 left-7 grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
              01
            </span>
            <span className="mt-2 grid h-14 w-14 place-items-center rounded-full bg-whatsapp/10 text-whatsapp">
              <WhatsAppIcon size={24} />
            </span>
            <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-ink">
              Open WhatsApp
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Tap the &ldquo;Order on WhatsApp&rdquo; button.
            </p>
          </Reveal>

          <Reveal delay={0.15} direction="up" className="relative rounded-2xl border border-line bg-white p-7 shadow-soft">
            <span className="absolute -top-4 left-7 grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
              02
            </span>
            <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-ink">
              Tell Us What You Want
            </h3>
            <div className="mt-4 rounded-xl bg-[#e9fbe2] p-4 text-sm leading-relaxed text-ink">
              <p>Hi MealSection👋,</p>
              <p className="mt-1">I&rsquo;d like to order:</p>
              <p className="mt-1 font-semibold">
                Jollof Rice &amp; Chicken
                <br />
                Coke
              </p>
              <p className="mt-2">
                Delivery location:
                <br />
                <span className="font-semibold">Hostel A</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up" className="relative rounded-2xl border border-line bg-white p-7 shadow-soft">
            <span className="absolute -top-4 left-7 grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
              03
            </span>
            <span className="mt-2 grid h-14 w-14 place-items-center rounded-full bg-surface-tint text-brand">
              <CheckCircle2 size={24} />
            </span>
            <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-ink">
              We&rsquo;ll Handle the Rest
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              We&rsquo;ll confirm your order, payment and delivery details.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
