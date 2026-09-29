import { Instagram, Twitter, Facebook, Music2 } from 'lucide-react'
import { NAV_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '../config/site'
import mealsectionLogo from '../assets/images/icons/mealsection-logo.png'

const socialIcons = {
  Instagram,
  X: Twitter,
  Facebook,
  TikTok: Music2,
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a href="#home" className="flex items-center">
              <img src={mealsectionLogo} alt="MealSection" className="h-9 w-auto" />
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Making food ordering easier for students.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          <nav>
            <h4 className="text-xs font-bold uppercase tracking-wide text-ink-soft">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            &copy; 2026 MealSection. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-ink-soft transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
