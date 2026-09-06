/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        panel: '#131114',
        'panel-2': '#1a171c',
        line: '#302b33',
        'line-soft': '#211e23',
        text: '#f6f1f5',
        'text-dim': '#aaa2ad',
        'text-faint': '#716a74',
        amber: '#c084fc',
        'amber-dim': '#713f9e',
        green: '#d9f99d',
        'accent-pink': '#ec4899',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 50px rgba(168, 85, 247, 0.18)',
      },
    },
  },
};
