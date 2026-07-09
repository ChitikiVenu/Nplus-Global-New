import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f8ff',
          100: '#e7f0ff',
          200: '#d7e6ff',
          300: '#b7d0ff',
          400: '#8db4ff',
          500: '#5b8ff5',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#e7f0ff',
          950: '#f4f8ff',
        },
        cyan: {
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
        },
        health: {
          blue: '#1a3a6b',
          light: '#2563eb',
          accent: '#0ea5e9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'hero-gradient': 'radial-gradient(circle at 80% 18%, rgba(37,99,235,0.18), transparent 34%), linear-gradient(135deg, #f4f8ff 0%, #e7f0ff 52%, #d7e6ff 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(231,240,255,0.64) 100%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(37,99,235,0.16) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 16px 40px rgba(3,10,28,0.26)',
        'glow-lg': '0 22px 64px rgba(3,10,28,0.28)',
        'card': '0 8px 28px rgba(3,10,28,0.3)',
        'card-hover': '0 16px 44px rgba(3,10,28,0.24)',
      },
    },
  },
  plugins: [],
}

export default config
