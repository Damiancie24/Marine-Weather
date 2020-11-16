import { CityWeather } from './cityWeather.model';
export class Weather {
    cityName: string;
    temperature: number;
    pressure: number;
    humidity: number;
    weatherDescription: string;
    constructor(data: CityWeather) {
        this.cityName = data.cityName;
        this.temperature = data.temperature;
        this.pressure = data.pressure;
        this.humidity = data.humidity;
        this.weatherDescription = data.description;
    }
    render(): string {
        return `<div class="city">
            <h1>${this.cityName}</h1>
            <div class="description"> ${this.weatherDescription}</div>
            <div class="temp">Temperatura: ${this.temperature}&deg;C</div>
            <div class="pressure">Ciśnienie: ${this.pressure} hPa</div>
            <div class="humidity">Wilgotność: ${this.humidity}</div>
        </div>
        `;
    }

}