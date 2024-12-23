import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        buttonBackGround: '#505050',
        lightGray: '#b3b3b3',
        darkGray: '#979797',
        placeholder: '#505050',
        blackDefault: '#101010'
      }
    }
  },
  plugins: []
};
export default config;
