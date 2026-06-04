/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#060B19', 
          800: '#0F172A', 
          700: '#1E293B', 
        },
        gold: {
          400: '#e8c96b', 
          500: '#c9a84c', 
          dim: 'rgba(201,168,76,0.1)', 
        },
        cream: {
          50: '#FDFCF7',  
          100: '#F8F4E6', 
          200: '#E3DBC7', 
          300: '#C2B8A3', 
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-left': 'fadeLeft 0.8s ease forwards',
        'fade-right': 'fadeRight 0.8s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(24px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(-24px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}