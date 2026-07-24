/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(16,185,129,0.55)' },
          '50%': { transform: 'scale(1.045)', boxShadow: '0 0 0 11px rgba(16,185,129,0)' }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.1s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
