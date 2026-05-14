/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spacecraft: {
          'black': '#0a0e27',
          'dark': '#0f1535',
          'darker': '#050810',
          'cyan': '#00d9ff',
          'purple': '#b366ff',
          'green': '#39ff14',
          'orange': '#ff6600',
        },
      },
      fontFamily: {
        orbitron: 'Orbitron, sans-serif',
        grotesk: 'Space Grotesk, sans-serif',
        rajdhani: 'Rajdhani, monospace',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 10px rgba(0, 217, 255, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(2px)' },
          '40%': { transform: 'translateX(-2px)' },
          '60%': { transform: 'translateX(2px)' },
          '80%': { transform: 'translateX(-2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
