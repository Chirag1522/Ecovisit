// app.js

// Function to predict AQI for a given state and month in 2025 using linear regression
function predictAQI(state, month) {
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

// Function to get travel suggestion based on predicted AQI
function getTravelSuggestion(state, predictedAQI) {
    let bestTime;
    const idealMonths = []; // List to hold ideal months for visiting based on AQI

    // Determine ideal months based on AQI prediction and state
    switch (state) {
        case "Andhra Pradesh":
            idealMonths.push("October - February (Winter)");
            break;
        case "Arunachal Pradesh":
            idealMonths.push("March - October (Spring to pre-monsoon)");
            break;
        case "Assam":
            idealMonths.push("November - April (Winter to early summer)");
            break;
        case "Bihar":
            idealMonths.push("October - March (Winter)");
            break;
        case "Chhattisgarh":
            idealMonths.push("November - February (Winter)");
            break;
        case "Goa":
            idealMonths.push("November - February (Winter)");
            break;
        case "Gujarat":
            idealMonths.push("October - March (Winter)");
            break;
        case "Haryana":
            idealMonths.push("October - March (Winter)");
            break;
        case "Himachal Pradesh":
            idealMonths.push("March - June, September - November (Spring and post-monsoon)");
            break;
        case "Jharkhand":
            idealMonths.push("November - February (Winter)");
            break;
        case "Karnataka":
            idealMonths.push("October - March (Winter)");
            break;
        case "Kerala":
            idealMonths.push("November - February (Winter)");
            break;
        case "Madhya Pradesh":
            idealMonths.push("October - March (Winter)");
            break;
        case "Maharashtra":
            idealMonths.push("November - February (Winter)");
            break;
        case "Manipur":
            idealMonths.push("October - March (Winter)");
            break;
        case "Meghalaya":
            idealMonths.push("October - March (Winter)");
            break;
        case "Mizoram":
            idealMonths.push("October - March (Winter)");
            break;
        case "Nagaland":
            idealMonths.push("October - March (Winter)");
            break;
        case "Odisha":
            idealMonths.push("October - March (Winter)");
            break;
        case "Punjab":
            idealMonths.push("October - March (Winter)");
            break;
        case "Rajasthan":
            idealMonths.push("October - March (Winter)");
            break;
        case "Sikkim":
            idealMonths.push("March - June, September - December (Spring and post-monsoon)");
            break;
        case "Tamil Nadu":
            idealMonths.push("November - February (Post-monsoon)");
            break;
        case "Telangana":
            idealMonths.push("October - March (Winter)");
            break;
        case "Tripura":
            idealMonths.push("October - March (Winter)");
            break;
        case "Uttar Pradesh":
            idealMonths.push("October - March (Winter)");
            break;
        case "Uttarakhand":
            idealMonths.push("March - June, September - November (Spring and post-monsoon)");
            break;
        case "West Bengal":
            idealMonths.push("October - March (Winter)");
            break;
        case "Andaman and Nicobar Islands":
            idealMonths.push("November - April (Winter)");
            break;
        case "Chandigarh":
            idealMonths.push("October - March (Winter)");
            break;
        case "Dadra and Nagar Haveli and Daman and Diu":
            idealMonths.push("November - February (Winter)");
            break;
        case "Lakshadweep":
            idealMonths.push("October - April (Winter)");
            break;
        case "Delhi":
            idealMonths.push("October - February (Winter)");
            break;
        case "Puducherry":
            idealMonths.push("November - February (Post-monsoon)");
            break;
        case "Jammu and Kashmir":
            idealMonths.push("April - October (Spring to early winter)");
            break;
        case "Ladakh":
            idealMonths.push("May - September (Spring to summer)");
            break;
        default:
            idealMonths.push("Check local AQI data for best visiting times.");
            break;
    }
    

    // Create a message based on predicted AQI levels
    if (predictedAQI < 50) {
        return `Great time to visit! Enjoy clear skies. Best time: ${idealMonths.join(", ")}.`;
    } else if (predictedAQI < 100) {
        return `Good time to visit, but consider outdoor activities carefully. Best time: ${idealMonths.join(", ")}.`;
    } else if (predictedAQI < 150) {
        return `Moderate pollution. Best to limit outdoor activities. Consider visiting during: ${idealMonths.join(", ")}.`;
    } else {
        return `High pollution. Consider rescheduling your trip or visiting in a different season. Best time: ${idealMonths.join(", ")}.`;
    }
}
