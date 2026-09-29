// Centralized site configuration — update the WhatsApp number here and everywhere updates.
export const WHATSAPP_NUMBER = '2347013234960'

export const WHATSAPP_MESSAGES = {
  order: "Hi MealSection 👋 I'd like to place an order.",
  vendor: 'Hi MealSection 👋 I\'m interested in becoming a vendor.',
  learnApp: 'Hi MealSection 👋 I\'d like to know more about the MealSection app.',
}

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Food', href: '#food' },
  { label: 'App', href: '#app' },
  { label: 'Vendors', href: '#vendors' },
]

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
]
