/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1137px'
        },
      },
      fontFamily: {
        'Almarai': ['Almarai', 'sans-serif'],
      },
      colors: {
        primary: "#8447FF",
        secondary: "#AE47FF",
      },
      fontSize: {
        "text-base": ["16px", { lineHeight: '17.86px' }],
        "text-sm": ["14px", { lineHeight: '15.62px' }],
        "text-lg": ["18px", { lineHeight: '20px' }],
        "text-xl": ["21px", { lineHeight: '31.5px' }],
        "text-3xl": ["36px", { lineHeight: '46.08px' }],
        "36-54": ["36px", { lineHeight: '45px' }],
        "30-45": ["30px", { lineHeight: '45px' }],
        "24-36": ["24px", { lineHeight: '36px' }],
        "21-31": ["21px", { lineHeight: '31px' }],
        "20-30": ["20px", { lineHeight: '30px' }],
        "18-21": ["18px", { lineHeight: '21px' }],
        "18-22": ["18px", { lineHeight: '22.5px' }],
        "18-27": ["18px", { lineHeight: '27px' }],
        "18-40": ["18px", { lineHeight: '40px' }],
        "16-21": ["16px", { lineHeight: '21.76px' }],
        "16-24": ["16px", { lineHeight: '24px' }],
        "16-28": ["16px", { lineHeight: '28.8px' }],
        "16-24": ["16px", { lineHeight: '24px' }],
        "16-50": ["16px", { lineHeight: '50px' }],
        "16-36": ["16px", { lineHeight: '36px' }],
        "13-23": ["13px", { lineHeight: '23.4px' }],
        "14-27": ["14px", { lineHeight: '27px' }],
        "14-25": ["14px", { lineHeight: '25.2px' }],
        "14-21": ["14px", { lineHeight: '21px' }],
        "14-17": ["14px", { lineHeight: '17.5px' }],
        "14-15": ["14px", { lineHeight: '15.62px' }],
        "13-19": ["13px", { lineHeight: '19.5px' }],
        "11-16": ["11px", { lineHeight: '16.5px' }],


      },
      boxShadow: {
        'headerShadow': ' 0px 2px 8px rgba(0, 0, 0, 0.08)',
        'featuredJob': ' 0px 1px 1px rgba(0, 0, 0, 0.16)',
        'nextprev': ' 0px 0px 16px rgba(0, 0, 0, 0.16)',
        'join': ' 0px 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1110px',
          }
        }
      })
    }
  ]
}
