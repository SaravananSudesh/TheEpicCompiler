/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      
      // Background
      'light-1': '#ffffff',
      'dark-1' : '#0c0c0c',
      'light-2' : '#ffffff',
      'dark-2' : '#1e1e1e',

      // Foreground
      'light-c-1': '#0c0c0c',
      'dark-c-1': '#ffffff',
      'light-c-2': '#656565',
      'dark-c-2': '#9e9e9e'
    },
    extend: {},
  },
  plugins: [],
}

