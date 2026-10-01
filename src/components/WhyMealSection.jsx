import { Zap, Smartphone, UtensilsCrossed, MapPin, Users } from 'lucide-react'
import studentLifestyle from '../assets/images/student-lifestyle.png'
import WhatsAppIcon from './icons/WhatsAppIcon'
import Reveal from './Reveal'

const features = [
  { icon: Zap, title: 'Fast', text: 'Because nobody wants to wait forever for food.' },
  { icon: Smartphone, title: 'Simple', text: 'Order from your phone without complicated steps.' },
  { icon: UtensilsCrossed, title: 'Variety', text: 'Discover meals from different campus vendors.' },
  { icon: MapPin, title: 'Convenient', text: 'Get your food delivered where you are.' },
  { icon: WhatsAppIcon, title: 'Easy Communication', text: 'Chat with us directly through WhatsApp.' },
  { icon: Users, title: 'Student-Friendly', text: 'Food options designed around everyday student needs.' },
]

export default function WhyMealSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" duration={0.9} className="relative">
          <div className="pointer-events-none absolute -left-6 -top-6 h-2/3 w-2/3 rounded-[2rem] bg-surface-tint" />
          <div className="pointer-events-none absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-brand-bright/10" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={studentLifestyle}
              alt="A university student smiling while ordering food on her phone"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
          <span className="pill">Why Choose MealSection</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Built for Campus Life.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Everything you need for a better food experience on campus.
          </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="flex items-start gap-3 rounded-xl border border-line p-4">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-tint text-brand">
                  <Icon size={16} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
