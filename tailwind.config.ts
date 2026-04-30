import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mt-red':    'var(--red)',
        'mt-gold':   'var(--gold)',
        'mt-bg':     'var(--bg)',
        'mt-surface':'var(--surface)',
        'mt-text':   'var(--text)',
        'mt-muted':  'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
