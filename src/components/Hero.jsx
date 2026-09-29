import { Smartphone, Truck, Zap } from 'lucide-react'
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import heroPlate from '../assets/images/hero-plate-cutout1.png'
import WhatsAppIcon from './icons/WhatsAppIcon'

const benefits = [
  { icon: Smartphone, label: 'Order directly from your phone' },
  { icon: Zap, label: 'Fast campus delivery' },
  { icon: Truck, label: 'No app required' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-surface-tint blur-2xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fadeUp">
          <span className="pill">Food • Campus • Delivery</span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Your Favourite Meals,
            <br />
            Just a <span className="text-brand-bright">WhatsApp Away.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            MealSection makes it easy for students to discover delicious meals from
            campus vendors and get them delivered right to your dorstep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon size={18} />
              Order on WhatsApp
            </a>
            <a href="#app" className="btn-outline">
              Coming Soon Get the App
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-surface-tint text-brand">
                  <Icon size={15} />
                </span>
                <span className="text-sm font-medium text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex animate-fadeUp items-center justify-center [animation-delay:150ms]">
          <div className="pointer-events-none absolute -bottom-8 -left-4 h-24 w-24 rounded-full border-8 border-surface-tint sm:h-32 sm:w-32" />
          <div className="pointer-events-none absolute right-2 top-6 hidden gap-1.5 sm:flex">
            <span className="h-2 w-2 rounded-full bg-brand-bright" />
            <span className="h-2 w-2 rounded-full bg-brand-bright/60" />
            <span className="h-2 w-2 rounded-full bg-brand-bright/30" />
          </div>

          <div className="pointer-events-none absolute -inset-2 rounded-full bg-brand-bright/10 blur-2xl" />

          <img
            src={heroPlate}
            alt="Jollof rice and grilled chicken with a fresh side salad a MealSection campus meal"
            className="relative w-full max-w-[440px] animate-float-slow drop-shadow-[0_30px_40px_rgba(17,17,17,0.28)] sm:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  )
}