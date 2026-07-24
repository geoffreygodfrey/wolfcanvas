/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          surface: '#F8FAFC',
          muted: '#94A3B8',
          border: '#E2E8F0',
        },
        accent: {
          indigo: '#6366F1',
          'indigo-dark': '#4F46E5',
          muted: '#2A2745',
          cyan: '#22D3EE',
          teal: '#14B8A6',
        },
      },
      fontFamily: {
        headline: ['Merriweather', 'Georgia', 'serif'],
        body: ['"Times New Roman"', 'Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
