import type { Config } from "tailwindcss";

const config: Config = {
 
  content: [
    //  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    screens: {

      'mobile-portrait':'360px',
      'mobile-landscape':'576px',
      'tablet-portrait': '767px',
      'tablet-landscape': '991px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {
      backgroundImage: {
        "gradient-banner-overlay": "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 53%, rgba(0, 0, 0, 0.8) 87%)"
      },
      fontSize:{
        'text-xxs':'16px',
      },
      colors:{
        "solid-colors":{
          red_100:"var(--site-red-100)",
          red_200:"var(--site-red-200)",
          red_300:"var(--site-red-300)",
          dark_100:"var(--site-dark-100)",
          dark_200:"var(--site-dark-200)",
          dark_300:"var(--site-dark-300)",
          dark_400:"var(--site-dark-400)",
          dark_500:"var(--site-dark-500)",
          dark_600:"var(--site-dark-600)",
          dark_700:"var(--site-dark-700)",
          blue_100:"var(--site-blue-100)",
          white_100:"var(--site-white-100)"
        },
      },
      borderWidth:{
        '1':'1px'
      },
      borderColor:{
        'white-fade':'rgba(128,128,128,0.7)',
      },
      borderRadius:{
        'rad-primary': '0.25rem',
        'rad-secondary':'0.125rem',
      },
      padding:{
        'buttonsmall':'0.25rem 1rem',
        'inputlarge':'1.5rem 1rem 0.5rem',
        'buttonmedium':'0.75rem 1.5rem',
        'pagepadding':'20px',

      },
      maxWidth:{
        'page-width':'1200px',
      },
      margin:{
        'marginsmall':'0.0625rem',
      },
      
      lineHeight:{
        'leading_1':'4.25rem'
      },
      opacity:{
        'opac_1':'1'
      },
      flex:{
        'footer_menu-flex':'0 0 25%',
        'footer_menu-flex-sm': '0 0 50%',
      }

    },
  },
  plugins: [],
};


 export default config;

