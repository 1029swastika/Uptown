/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textOne: "#666666",
        textTwo: "#333333",
        textThree: "#676767",
        mygray: "#fafafa",
        myPink: "#e86ed0",
      },
      backgroundImage: {
        banner: "url('/houses.jpg')",
        room: "url('/livingroom.jpg')",
        jeep: "url('/jeep.jpg')",
      },
    },
  },
  plugins: [],
};
