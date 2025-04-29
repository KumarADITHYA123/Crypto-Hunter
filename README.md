# Crypto Hunter

A responsive cryptocurrency tracking app that allows users to view real-time data, historical charts, and detailed information about their favorite cryptocurrencies.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Future Improvements](#future-improvements)
  - [Resources](#resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View real-time cryptocurrency prices and market data.
- Access historical price charts for selected cryptocurrencies.
- Search for specific cryptocurrencies and filter results.
- Navigate seamlessly between pages for detailed coin information.
- Experience a responsive design that adjusts to different screen sizes.

### Screenshots

### Screenshots

![](./public/CryptoHunter%20ss1.png)
![](./public/CryptoHunter%20ss2.png)
![](./public/CryptoHunter%20ss3.png)

### Links

- Live Site URL: [Live site URL here](https://cryptohunter123.netlify.app/)

## My Process

### Built With

- React.js
- Material-UI for styling
- Axios for API calls
- React Router for navigation
- Chart.js for data visualization
- Desktop-first workflow

### What I Learned

- Implemented React Context API for global state management (e.g., currency selection).
- Enhanced understanding of API integration using Axios.
- Improved skills in creating responsive layouts with Material-UI.
- Learned how to use Chart.js for rendering interactive historical price charts.

```javascript
// Example: Fetching historical data for a cryptocurrency
const fetchHistoricData = async () => {
  const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
  setHistoricData(data.prices);
};
```

### Future Improvements

- Add user authentication and the ability to create a personalized watchlist.
- Implement dark/light theme toggle.
- Improve search optimization with debouncing.
- Add real-time push notifications for price changes.

---

### Resources

- [CoinGecko API Documentation](https://www.coingecko.com/en/api)
- [Material-UI Documentation](https://mui.com/)
- [Chart.js Documentation](https://www.chartjs.org/)

---

## Author

- **Name**: B Kumar Adithya
- Live Site URL: [https://cryptohunter123.netlify.app/](https://cryptohunter123.netlify.app/)
- GitHub: [https://github.com/KumarADITHYA123](https://github.com/KumarADITHYA123)
- LinkedIn: [https://www.linkedin.com/in/kumar-adithya-bathula-66294b2b2/](https://www.linkedin.com/in/kumar-adithya-bathula-66294b2b2/)

---
