  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: 'class',
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        animation: {
          progress: "progress 2s infinite",
        },
        keyframes: {
          progress: {
            "0%": { width: "0%" },
            "100%": { width: "100%" },
          }
        }
      },
    },
    plugins: [],
  }

