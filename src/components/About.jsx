import { Search, ClipboardList, Truck } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import Reveal from './Reveal'

const cards = [
  {
    icon: Search,
    title: 'Discover Meals',
    text: 'Explore delicious meals from vendors around your campus.',
  },
  {
    icon: ClipboardList,
    title: 'Order Easily',
    text: 'Choose what you want and place your order in just a few steps.',
  },
  {
    icon: WhatsAppIcon,
    title: 'Order on WhatsApp',
    text: 'For now, simply send us a WhatsApp message and we’ll take care of the rest.',
  },
  {
    icon: Truck,
    title: 'Get It Delivered',
    text: 'Sit back and relax while your meal makes its way to you.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="pill">About MealSection</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Food on Campus, Made Simple.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            MealSection is a food delivery platform built with students in mind.
            Discover meals from campus vendors, place your order easily, and get
            your food delivered without the stress.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
            <div
              className="card-hover h-full rounded-2xl border border-line bg-white p-7 shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-surface-tint text-brand">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
