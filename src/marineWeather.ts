import { MarineWeatherModel } from './marineWeather.model';
export class MarineWeather {
    latitude: number;
    londitude: number;
    temperature: number;
    windSpeed: number;
    windDirection: number;
    gust: number;
    waveHeight: number;
    waveDirection: number;
    pressure: number;
    humidity: number;
    constructor(data: MarineWeatherModel) {
        this.latitude = data.latitude;
        this.londitude = data.londitude;
        this.temperature = data.temperature;
        this.windSpeed = data.windSpeed;
        this.pressure = data.pressure;
        this.humidity = data.humidity;
    }
    render(): string {
        return `<div class="city">
            <h1>Lat: ${this.latitude} Lon: ${this.londitude}</h1>
            <div class="temp">Temperatura: ${this.temperature}&deg;C</div>
            <div class="windSpeed">windSpeed: ${this.windSpeed} </div>
            <div class="windDirection">windDirection: ${this.windDirection}</div>
            <div class="gust">gust: ${this.gust}</div>
            <div class="waveHeight">guwaveHeightst: ${this.waveHeight}</div>
            <div class="waveDirection">waveDirection: ${this.waveDirection}</div>
            <div class="pressure">pressure: ${this.pressure}hPa</div>
            <div class="humidity">humidity: ${this.humidity}</div>

        </div>
        `;
    }

}