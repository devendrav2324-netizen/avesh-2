/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./effects/**/*.{js,ts,jsx,tsx}",
    "./Scene.tsx"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#08090b",
          900: "#0e1014",
          850: "#14161c",
          800: "#171717",
          700: "#1f2229",
          600: "#2a2d36",
          500: "#3d424e",
        },
        sunset: {
          DEFAULT: "#FF642E",
          hover: "#FF7B4D",
          dark: "#E04E1B",
          glow: "rgba(255, 100, 46, 0.4)",
          subtle: "rgba(255, 100, 46, 0.12)",
        },
        coral: "#FF8C66",
        amber: "#FFA843",
        silver: {
          100: "#FFFFFF",
          200: "#F2F4F8",
          300: "#D8DCE3",
          400: "#A7ACB9",
          500: "#7A8090",
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #FF642E 0%, #FFA843 60%, #FF8C66 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 30%, #20222a 0%, #0d0e11 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
