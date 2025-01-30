/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotu: ['Gotu', 'sans-serif'],
        tsukimi: ['"Tsukimi Rounded"', 'sans-serif'],
      },
      keyframes: {
        slideFadeIn: {
          '0%': { opacity: '0', transform: 'translateX(var(--tw-translate-x))' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-fade-in': 'slideFadeIn 1s ease-in-out forwards',
        'spin-loop': 'rotate360 15s linear infinite',
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      transitionDelay: {
        500: '500ms',
        1000: '1000ms',
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        6000: '6000ms',
        8000: '8000ms',
        10000: '10000ms',
      },
    },
  },
  plugins: [],
};
