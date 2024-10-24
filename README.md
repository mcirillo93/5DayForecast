# 5DayForecast

Table of Contents
Introduction
Features
Technologies Used
Prerequisites
Installation
API Integration
Usage
Project Structure
Contributing
License

##Introduction

The 5 Day Weather Forecast Application provides users with weather forecasts for the upcoming five days, including details such as temperature, humidity, wind speed, and weather conditions. The app fetches real-time data from a weather API and presents it in a user-friendly interface.

##Features

Fetch real-time weather data for any city.
View a 5-day forecast with detailed weather information.
Displays temperature, humidity, wind speed, and weather condition icons.
Responsive design for both mobile and desktop views.
Option to switch between Celsius and Fahrenheit.
Technologies Used
Frontend: HTML, CSS, JavaScript (or React, Vue.js, etc.)
Backend (optional): Node.js, Express.js (or any other backend for server-side rendering or additional processing)
API: OpenWeather API or any other weather data provider.
Version Control: Git
Package Manager: npm or yarn
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (if using a backend)
npm or yarn installed
API key from a weather data provider like OpenWeather

##Installation

##Clone the repository:

git clone https://github.com/mcirillo93/5DayForecast-app.git

##Navigate into the project directory:
cd 5-day-forecast-app

##Install the required dependencies:
npm install

##API Integration
This app uses the OpenWeather API to fetch weather data. To set up the API:

Go to the OpenWeather API website and create an account.
Generate an API key from your account.
Create a .env file in the root of your project and add the API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Replace REACT_APP_WEATHER_API_KEY with the correct environment variable name if using a different framework or tool.

##Usage
Run the application:
npm start

Open your browser and navigate to:
http://localhost:3000

Enter the name of a city in the search bar to view its 5-day forecast.

##Project Structure
.
├── src
│   ├── components
│   ├── pages
│   ├── services
│   │   └── weatherService.js # Contains API calls to fetch weather data
│   └── assets
├── public
├── .env
├── README.md
├── package.json
└── ...

components: Contains reusable components like the weather display card.
services/weatherService.js: Handles API requests and responses.
pages: Contains page components for different views, such as the homepage or forecast details.
assets: For static assets like icons and images.

##Contributing
Contributions are welcome! If you would like to improve this application, feel free to submit a pull request or open an issue.

##License
This project is licensed under the MIT License.



