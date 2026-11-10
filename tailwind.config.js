/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080808',
          900: '#080808',
          800: '#111111',
          700: '#191919',
          600: '#222222',
        },
        champagne: {
          DEFAULT: '#C6A15B',
          light: '#D4B67A',
          dark: '#A88748',
        },
        muted: {
          gold: '#A88748',
        },
        soft: {
          DEFAULT: '#F5F5F2',
        },
        neutral: {
          grey: '#858585',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '0.3em',
        'ultra': '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
