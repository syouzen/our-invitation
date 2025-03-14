/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-sans)', 'Noto Sans KR', 'sans-serif'],
      serif: ['var(--font-serif)', 'Nanum Myeongjo', 'serif'],
      serif_en: [
        'var(--font-serif-en)',
        'Cormorant SC',
        'Nanum Myeongjo',
        'serif',
      ],
    },
    keyframes: {
      'accordion-down': {
        from: {height: 0},
        to: {height: 'var(--radix-accordion-content-height)'},
      },
      'accordion-up': {
        from: {height: 'var(--radix-accordion-content-height)'},
        to: {height: 0},
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
