module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'papa-gold': '#FFD700',
        'papa-yellow': '#FFEB3B',
        'papa-hover': '#FF9800',
        'papa-dark': '#1a1a1a',
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
        'slide-slow': 'slide 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'papa-pattern': "url('/src/logo.png')",
      },
    },
  },
  plugins: [],
} 