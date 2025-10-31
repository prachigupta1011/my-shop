/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#111827",
                    accent: "#FACC15",
                    surface: "#F9FAFB",
                    subtle: "#6B7280",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            boxShadow: {
                card: "0 20px 40px -10px rgba(0,0,0,0.15)",
                "card-hover": "0 30px 60px -10px rgba(0,0,0,0.3)",
            },
            borderRadius: {
                xl2: "1rem",
            },
        },
    },
    plugins: [],
};
