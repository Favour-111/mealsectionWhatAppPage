import { CheckCircle2 } from 'lucide-react'
import appDevices from '../assets/images/app-devices.png'
import appleLogo from '../assets/images/icons/apple-logo.png'
import playstoreLogo from '../assets/images/icons/playstore-logo.png'

const checklist = [
  'Discover campus vendors',
  'Easy ordering experience',
  'Track your order in real time',
  'Exclusive student deals',
]

export default function AppComingSoon() {
  return (
    <section id="app" className="bg-gradient-to-b from-surface-tint to-white py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="pill">Coming Soon</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              The MealSection App Is Coming.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              We&rsquo;re building a better way for you to discover, order and enjoy
              food on campus.
            </p>

            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={appDevices}
              alt="MealSection mobile app screens showing home, order tracking and delivery status"
              className="w-full rounded-[2rem] shadow-card"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink px-7 py-8 sm:flex-row sm:px-10">
          <div>
            <h3 className="text-lg font-bold text-white">Coming Soon on Your Phone.</h3>
            <p className="mt-1 text-sm text-white/60">
              Available soon on both iOS and Android.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-left opacity-80"
            >
              <img src={appleLogo} alt="" className="h-6 w-6 object-contain" />
              <span className="leading-tight">
                <span className="block text-[10px] text-white/60">Coming Soon</span>
                <span className="block text-sm font-semibold text-white">App Store</span>
              </span>
            </button>
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-left opacity-80"
            >
              <img src={playstoreLogo} alt="" className="h-6 w-6 object-contain" />
              <span className="leading-tight">
                <span className="block text-[10px] text-white/60">Coming Soon</span>
                <span className="block text-sm font-semibold text-white">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
