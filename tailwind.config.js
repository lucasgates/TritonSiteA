/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        triton: {
          dark: '#0B1B35',    // Dark blue background
          primary: '#1E3A8A', // Primary blue
          accent: '#3B82F6',  // Accent blue
          light: '#93C5FD',   // Light blue for highlights
          gray: '#1F2937',    // Dark gray for secondary backgrounds
          button: 'rgb(99,162,22)' // Green button color
        }
      }
    },
  },
  plugins: [],
};