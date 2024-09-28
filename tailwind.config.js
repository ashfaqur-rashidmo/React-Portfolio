/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
     /* xxs: '320px',   
      xs: '375px',
      sm: '425px', 
      md: '768px', 
      lg: '1024px',    
      xl: '1440px',    
      xxl: '2560px',
      '2xl': '1536px',
      '2xl-mx': { max: '1535px' },
      'xl-mx': { max: '1279px' },
      'lg-mx': { max: '1023px' },
      'md-mx': { max: '767px' },
      'sm-mx': { max: '639px' },
      'xs-mx': { max: '475px' }, */
      'xxs' :'320px',
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' },
      'xxs-mx' :{'max':'320px'}

    },
    extend: {
      animation: {
        backgroundPositionSpin: "background-position-spin 3000ms infinite alternate",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        'spin-slow': 'spin 3s linear infinite',
        spin: 'spin 1s linear infinite', 
        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
         
        },
        
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        spin: { 
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        ping: { 
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
     
      },
      colors: {
        bgColor: "#112240",
        primaryColor: "#64FFDa",
        textColor: "#8592B0",
      },
    },
  },
  plugins: [],
}
