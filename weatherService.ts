import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  country: string;
  date: string;
  description: string;
  humidity: number;
  icon: string;
  temperature: number;
  wind: number;

  constructor(city: string, country: string, date: string, description: string, humidity: number, icon: string, temperature: number, wind: number) {
    this.city = city;
    this.country = country;
    this.date = date;
    this.description = description;
    this.humidity = humidity;
    this.icon = icon;
    this.temperature = temperature;
    this.wind = wind;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  private baseURL: string;
  private apiKey: string;
  private cityName: string;

  constructor() {
    this.baseURL = 'https://api.openweathermap.org/data/2.5';
    this.apiKey = process.env.WEATHER_API_KEY || '';
    this.cityName = '';
  }

  private async fetchLocationData(query: string): Promise<any> {
    const response = await fetch(`${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`);
    return response.json();
  }

  private destructureLocationData(locationData: any[]): Coordinates {
    const { lat, lon } = locationData[0];
    return { lat, lon };
  }


  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}&units=metric`;
  }

  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const locationData = await this.fetchLocationData(this.cityName);
    return this.destructureLocationData(locationData);
  }

  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const response = await fetch(this.buildWeatherQuery(coordinates));
    return response.json();
  }

  private parseCurrentWeather(response: any): Weather {
    const { name: city, sys: { country }, dt: date, weather, main: { humidity, temp: temperature }, wind: { speed: wind } } = response;
    const { description, icon } = weather[0];
    return new Weather(city, country, new Date(date * 1000).toISOString(), description, humidity, icon, temperature, wind);
  }

  private buildForecastArray(currentWeather: Weather, weatherData: any[]): Weather[] {
    return weatherData.map((data: any) => {
      const { dt: date, weather, main: { humidity, temp: temperature }, wind: { speed: wind } } = data;
      const { description, icon } = weather[0];
      return new Weather(currentWeather.city, currentWeather.country, new Date(date * 1000).toISOString(), description, humidity, icon, temperature, wind);
    });
  }

  async getWeatherForCity(city: string): Promise<Weather[]> {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);
    const currentWeather = this.parseCurrentWeather(weatherData);
    return this.buildForecastArray(currentWeather, weatherData.list);
  }
