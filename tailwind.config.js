/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064E3B', // Deep Emerald Green
          950: '#022c22',
        },
        gold: {
          50: '#fdfbf2',
          100: '#f9f4df',
          200: '#f2e5b7',
          300: '#ebd388',
          400: '#e1be52',
          500: '#D4AF37', // Soft Gold Accent
          600: '#b89228',
          700: '#926e20',
          800: '#77571f',
          900: '#64481f',
          950: '#3a270d',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FCFBF9',
          200: '#FAF9F6', // Warm Cream / Off-White
          300: '#F4F1EA',
          400: '#EBE5D9',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      backgroundImage: {
        'islamic-pattern': "radial-gradient(#d4af37 0.75px, transparent 0.75px), radial-gradient(#064e3b 0.75px, #faf9f6 0.75px)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
