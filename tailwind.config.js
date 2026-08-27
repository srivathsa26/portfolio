/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F4F6",
        surface: "#FFFFFF",
        ink: "#0C0C0E",
        mute: "#5E616B",
        line: "rgba(12,12,14,0.08)",
        accent: {
          DEFAULT: "#1A5FFF",
          soft: "rgba(26,95,255,0.1)",
          muted: "#1449CC",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "74rem",
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(12,12,14,0.04), 0 18px 40px -24px rgba(12,12,14,0.25)",
      },
    },
  },
  plugins: [],
};
