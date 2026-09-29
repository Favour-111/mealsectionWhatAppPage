import { MapPin } from 'lucide-react'
import jollofChicken from '../assets/images/food/jollof-chicken.jpg'
import shawarma from '../assets/images/food/shawarma.jpg'
import friedRice from '../assets/images/food/fried-rice.jpg'
import pepperSoup from '../assets/images/food/pepper-soup.jpg'
import suya from '../assets/images/food/suya.jpg'
import egusiSoup from '../assets/images/food/egusi-soup.jpg'

const foods = [
  { image: jollofChicken, name: 'Jollof Rice & Chicken', category: 'Rice Meals', price: '₦2,500', vendor: 'Campus Kitchen' },
  { image: friedRice, name: 'Fried Rice', category: 'Rice Meals', price: '₦2,500', vendor: 'Tasty Bites' },
  { image: pepperSoup, name: 'Pepper Soup', category: 'Soups', price: '₦1,800', vendor: 'Naija Kitchen' },
  { image: suya, name: 'Suya', category: 'Grills', price: '₦1,500', vendor: 'Suya Spot' },
  { image: egusiSoup, name: 'Egusi Soup', category: 'Soups', price: '₦2,200', vendor: "Mama's Kitchen" },
  { image: shawarma, name: 'Chicken Shawarma', category: 'Quick Bites', price: '₦2,000', vendor: 'Shawarma Hub' },
]

export default function FoodShowcase() {
  return (
    <section id="food" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="pill">Food Showcase</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Good Food. Good Mood.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
              From quick bites to full meals, discover what your campus has to offer.
            </p>
          </div>
        </div>

        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:overflow-visible">
          {foods.map((food) => (
            <div
              key={food.name}
              className="card-hover group w-[210px] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white shadow-soft lg:w-auto"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                  {food.category}
                </p>
                <h3 className="mt-1 text-sm font-bold text-ink">{food.name}</h3>
                <p className="mt-1 text-sm font-extrabold text-brand-bright">{food.price}</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-ink-soft">
                  <MapPin size={12} />
                  {food.vendor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
