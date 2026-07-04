/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#12172C',
        panel: '#1A2140',
        panel2: '#212A4E',
        border: '#2C3660',
        muted: '#A7ADC6',
        orange: '#F4622A',
        orangeLight: '#FF8455',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 20px 50px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(244,98,42,0.25)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinSlowReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        spinSlow: 'spinSlow 30s linear infinite',
        spinSlowReverse: 'spinSlowReverse 40s linear infinite',
      },
    },
  },
  plugins: [],
}
