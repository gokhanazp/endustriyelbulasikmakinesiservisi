/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554",
        },
        steel: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 40px -12px rgba(30, 58, 138, 0.25)",
        card: "0 4px 24px -8px rgba(15, 23, 42, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -15px rgba(37, 99, 235, 0.5)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "hero-mesh":
          "radial-gradient(60% 60% at 15% 20%, rgba(59,130,246,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(251,191,36,0.25) 0%, transparent 55%), radial-gradient(60% 60% at 80% 85%, rgba(29,78,216,0.55) 0%, transparent 60%)",
        "shine":
          "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        gradientMove: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "60%,100%": { transform: "translateX(120%)" },
        },
        gridpan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 0.8s ease both",
        floaty: "floaty 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        "gradient-move": "gradientMove 12s ease infinite",
        shine: "shine 5s ease-in-out infinite",
        gridpan: "gridpan 20s linear infinite",
      },
    },
  },
  plugins: [],
};
