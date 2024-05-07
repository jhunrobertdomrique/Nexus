import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                dark: {
                    1: "#1C1F2E",
                    2: "#161925",
                    3: "#252A41",
                    4: "#2B174F",
                },
                blue: {
                    1: "#8929ff",
                },
                sky: {
                    1: "#C39CFF",
                    2: "#E4DAFF",
                    3: "#F5FCFF",
                },
                orange: {
                    1: "#F55353",
                },
                purple: {
                    1: "#C65BCF",
                },
                yellow: {
                    1: "#7ABA78",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                hero: "url('/images/hero-background.png')",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
