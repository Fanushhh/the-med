/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "1200px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-img":
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2)), url('https://newsite.themed.ro/uploads/home-hero.jpg');",
        "help-img":
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2)), url('https://site.themed.ro/images/gallery3.jpg');",
        "difference-img":
          "url('https://newsite.themed.ro/uploads/filosofia/differences.png')",
        "implant-img":
          "url('https://newsite.themed.ro/uploads/implant/implant-3.png')",
        "protetica-bg-tooth":
          "url('https://newsite.themed.ro/uploads/protetica/dinti-fundal.png')",
        "tooth-img":
          "url('https://newsite.themed.ro/uploads/endodontie/endodontie-dinte.png')",
        "blurred-bg":
          "url('https://images.unsplash.com/photo-1507181179506-598491b53db4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJsdXJyZWQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "chirurgie-bg-1":
          "url('https://newsite.themed.ro/uploads/chirurgie/chirurgie-bg-1.jpg')",
        "chirurgie-bg-2":
          "url('https://newsite.themed.ro/uploads/chirurgie/chirurgie-bg-2.png')",
        "chirurgie-bg-3":
          "url('https://newsite.themed.ro/uploads/chirurgie/chirurgie-bg-3.png')",
        "laborator-bg-1":
          "url('https://newsite.themed.ro/uploads/laborator/laborator-bg-1.png')",
        "laborator-bg-2":
          "url('https://newsite.themed.ro/uploads/laborator/laborator-bg-2.jpg')",
      },
    },
    fontFamily: {
      Heading: ["HK Grotesk", "sans-serif"],
      Body: ["Libre Baskerville", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "transparent",
          secondary: "transparent",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false,
    base: false, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
