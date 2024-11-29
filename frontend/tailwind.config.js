/** @type {import('tailwindcss').Config} */
/*
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
  */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Scan all React components
        "./public/index.html", // Include HTML files
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: {
                    green: "#10B981",
                    orange: "#F97316",
                },
                neutral: {
                    light: "#F3F4F6",
                    dark: "#1F2937",
                },
                accent: "#FACC15",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
