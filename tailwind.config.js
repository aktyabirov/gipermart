/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  
  theme: {
    extend: {
      container: {
        center: true, 
        padding: '2rem', 
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1360px',
        },
      },
    },
  },
  plugins: [
    require ('flowbite/plugin')
  ],
};
