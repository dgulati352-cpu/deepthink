import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'app-bg': 'var(--app-bg)',
        'app-text': 'var(--app-text)',
        'app-surface': 'var(--app-surface)',
        'app-border': 'var(--app-border)',
        'app-muted': 'var(--app-muted)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

