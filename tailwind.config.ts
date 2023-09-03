import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'img-fondo-footer': 'url("/assets/imgs/bgFooter.jpg")'
      },
      colors: {
        primary: '#0065ad',
        secondary: '#faba00',
        terciary: '#374151',
        hover: '#42bfdb',
        'red-tel': '#dc2626',
        'card-color': '#4B4B4B'
      },
      keyframes: {
        navbarAnimation: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      screens: {
        xs: '440px'
      }
    }
  },
  plugins: []
}
export default config
