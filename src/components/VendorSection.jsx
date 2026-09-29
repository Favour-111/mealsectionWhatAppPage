import { ArrowRight, TrendingUp } from 'lucide-react'
import { WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import vendorImage from '../assets/images/vendor.jpg'

export default function VendorSection() {
  return (
    <section id="vendors" className="bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="pill">For Vendors</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Are You a Campus Food Vendor?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Join MealSection and reach more students around your campus. Grow your
            business with ease.
          </p>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.vendor)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 inline-flex"
          >
            Become a MealSection Vendor
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={vendorImage}
              alt="A food vendor preparing meals at a busy campus food stall"
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-tint text-brand">
              <TrendingUp size={18} />
            </span>
            <p className="text-xs font-bold leading-snug text-ink">
              More Students
              <br />
              More Orders
              <br />
              <span className="text-brand">Grow with Us</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
