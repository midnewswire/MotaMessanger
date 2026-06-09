/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        whatsappGreen: '#075E54',
        whatsappGreenLight: '#128C7E',
        whatsappTeal: '#25D366',
        accentGold: '#FFD54F',
        deepSaffron: '#D84315'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
}
