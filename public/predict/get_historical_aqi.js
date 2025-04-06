const axios = require('axios');

// Define state names for India (you can add more as needed)
const states = [
  'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal',
  'Uttar Pradesh', 'Rajasthan', 'Punjab', 'Gujarat', 'Bihar'
];

// API Configuration
const API_KEY = '123456789abcdefg';
const BASE_URL = 'https://api.waqi.info/feed/';

const START_YEAR = new Date().getFullYear() - 3;

// Function to fetch AQI for a given state and year
async function getAQI(state, year) {
  try {
    const response = await axios.get(
      `${BASE_URL}${state}/history/${year}?token=${API_KEY}`
    );

    if (response.data.status === 'ok') {
      return {
        state,
        year,
        aqiData: response.data.data  // Adjust based on API response format
      };
    } else {
      throw new Error(`Error fetching AQI for ${state} in ${year}`);
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Function to fetch AQI data for all states for the last 3 years
async function fetchAllStatesAQI() {
  const results = [];

  for (const state of states) {
    for (let year = START_YEAR; year <= START_YEAR + 2; year++) {
      const data = await getAQI(state, year);
      if (data) {
        results.push(data);
      }
    }
  }

  return results;
}

// Execute the function and log results
fetchAllStatesAQI().then((data) => {
  console.log('Historical AQI Data for Indian States:', data);
}).catch((error) => {
  console.error('Failed to fetch historical AQI data:', error);
});
