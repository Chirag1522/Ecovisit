const ml = require('ml-regression');
const { SimpleLinearRegression } = ml;

/**
 * Predict AQI for each month of the next year based on historical data.
 * @param {Array} historicalData - Array of historical data in the format:
 *                                 [{ year: 2021, month: 1, aqi: 85 }, ...]
 * @returns {Object} - Predicted AQI values for each month of the next year.
 */
function predicted_aqi(historicalData) {
  // Group AQI data by month
  const monthlyData = {};
  
  historicalData.forEach((data) => {
    const { month, year, aqi } = data;
    if (!monthlyData[month]) monthlyData[month] = [];
    monthlyData[month].push({ year, aqi });
  });

  // Predict AQI for each month in the next year
  const nextYear = new Date().getFullYear() + 1;
  const predictions = {};

  Object.keys(monthlyData).forEach((month) => {
    const data = monthlyData[month];
    
    // Prepare data for linear regression
    const years = data.map(d => d.year);
    const aqis = data.map(d => d.aqi);
    
    if (years.length > 1) {
      // Create and train the linear regression model
      const regression = new SimpleLinearRegression(years, aqis);
      const predictedAQI = regression.predict(nextYear);
      
      // Store the prediction for the month
      predictions[month] = Math.round(predictedAQI);
    } else {
      // If not enough data for regression, return average AQI of the month
      predictions[month] = Math.round(aqis.reduce((a, b) => a + b, 0) / aqis.length);
    }
  });

  return predictions;

  const years = ["2020", "2021", "2022"]; // List of historical years
  const monthIndex = month - 1; // Month index (0 for January, 11 for December)

  // Get AQI values for the specified month from each year
  let historicalAQIs = [];
  years.forEach(year => {
      const data = getAQIData(state, year);
      if (data) {
          historicalAQIs.push(data[monthIndex]);
      }
  });

  // Perform simple linear regression (y = mx + c)
  const xValues = [0, 1, 2]; // For 2020, 2021, 2022
  const yValues = historicalAQIs;

  if (yValues.length < 3) {
      return { prediction: null, message: "Insufficient data" }; // Return error if less than 3 years of data
  }

  // Calculate slope (m) and intercept (c) using linear regression formula
  const { slope, intercept } = linearRegression(xValues, yValues);

  // Predict AQI for 2025 (x=5, since 2025 is 5 years from 2020)
  const predictedAQI = slope * 5 + intercept;

  // Suggest best time to visit based on the predicted AQI
  const suggestion = getTravelSuggestion(state, predictedAQI);

  return { prediction: Math.round(predictedAQI), suggestion };
}

// Function to perform linear regression (returns slope and intercept)
function linearRegression(x, y) {
  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.map((xi, i) => xi * y[i]).reduce((a, b) => a + b, 0);
  const sumXSquare = x.map(xi => xi * xi).reduce((a, b) => a + b, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}




const predictedAQI = predicted_aqi(historicalData);
console.log('Predicted AQI for each month in the next year:', predictedAQI);
