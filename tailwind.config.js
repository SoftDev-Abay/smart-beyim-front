/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      //* "name": ["font-size", "line-height"]
      h1: ["64px", "96px"],
      h2: ["52px", "78px"],
      h3: ["44px", "66px"],
      subHeading1: ["32px", "48px"],
      subHeading2: ["28px", "42px"],
      subHeading3: ["20px", "30px"],
      p1: ["16px", "19px"],
      p2: ["14px", "17px"],
      label1: ["12px", "15px"],
      label2: ["11px", "13px"],
      label3: ["10px", "12px"],
    },
    fontFamily: {
      sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      headings: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: {
          50: "#FDFEFF",
          100: "#EBF7FD",
          200: "#D8EFFA",
          300: "#D8EFFA",
          400: "#C5E8F8",
          500: "#B3E0F6",
          600: "#A0D9F4",
          700: "#8DD1F2",
          800: "#8DD1F2",
          900: "#68C2ED",
          1000: "#55BBEB",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          100: "#FDFDFD",
          200: "#E6E6E7",
          300: "#CFD0D1",
          400: "#B8B9BB",
          500: "#A1A2A5",
          600: "#8A8C90",
          700: "#73757A",
          800: "#5C5E64",
          900: "#45484E",
          1000: "#2E3138",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        black: {
          100: "#FCFCFC",
          200: "#E0E0E0",
          300: "#C4C4C4",
          400: "#A8A8A8",
          500: "#8C8C8C",
          600: "#707070",
          700: "#545454",
          800: "#383838",
          900: "#1C1C1C",
          1000: "#000000",
        },
        go: "#519C66",
        stop: "#CC5F5F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
    gridTemplateColumns: {
      "dashboard-layout": "321px 321px auto",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
      none: "none",
      subgrid: "subgrid",
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
  },

  plugins: [require("tailwindcss-animate")],
};
