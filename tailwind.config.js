module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: { 
        grayBlack: "#333333",
        blue:"#2F40DA",
      },
      fontSize: {
        //'2xl': ['24px', '28px'],
        '40px': ['40px', '44px'],
        '16px': ['16px', '20px'],
    },
    maxWidth: {
      '500px': '500px',
      '1/2': '50%',
    }
    },
  },
  plugins: [],
}
