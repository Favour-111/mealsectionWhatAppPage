/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9A161A',
          dark: '#7A1115',
          bright: '#F72530',
        },
        surface: {
          white: '#FFFFFF',
          off: '#FAFAFA',
          tint: '#FFF3F3',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#666666',
        },
        line: '#EEEEEE',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(17, 17, 17, 0.06)',
        card: '0 8px 24px rgba(154, 22, 26, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
