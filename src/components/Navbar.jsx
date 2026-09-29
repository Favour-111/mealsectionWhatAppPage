import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_MESSAGES, buildWhatsAppLink } from '../config/site'
import WhatsAppIcon from './icons/WhatsAppIcon'
import mealsectionLogo from '../assets/images/icons/mealsection-logo.png'

const dropdownVariants = {
  hidden: { opacity: 0, y: -14, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 360, damping: 28 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.18, ease: 'easeIn' },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  exit: {},
}

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.12 } },
}

function AnimatedHamburger({ open }) {
  return (
    <span className="relative grid h-5 w-5 place-items-center">
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.span
            key="close"
            className="absolute inset-0 grid place-items-center"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <X size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            className="absolute inset-0 grid place-items-center"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Menu size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 relative ${
        scrolled
          ? 'border-line bg-white/80 backdrop-blur-md shadow-soft'
          : 'border-transparent bg-white'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center">
          <img src={mealsectionLogo} alt="MealSection" className="h-8 w-auto sm:h-9" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon size={16} />
            Order on WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 !text-xs"
          >
            Order
          </a>
          <motion.button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="relative z-[60] grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink"
          >
            <AnimatedHamburger open={open} />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="dropdown"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ transformOrigin: 'top right' }}
              className="absolute left-4 right-4 top-full z-50 mt-3 overflow-hidden rounded-3xl border border-line bg-white shadow-2xl sm:left-auto sm:right-4 sm:w-80 lg:hidden"
            >
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-1 p-3"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.label} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface-tint hover:text-brand"
                    >
                      {link.label}
                      <ArrowRight
                        size={16}
                        className="text-ink-soft/0 transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={itemVariants} className="border-t border-line p-3">
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGES.order)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full rounded-2xl"
                >
                  <WhatsAppIcon size={16} />
                  Order on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
