import { NewCity } from "./newCity";
import { LocStorage } from "./locStorage";
import { WeatherSource } from "./weatherSource";
import { Weather } from "./weather";
import { CityWeather } from "./cityWeather.model";

export class App {
    newCity: NewCity;
    cities: CityWeather[] = [];
    constructor() {
        this.start();
    }
    start(): void {
        this.newCity = new NewCity(this.onNewCity);
    }
    onNewCity = (city: string): void => {

        // pobrać pogodę dla miasta
        const weatherSource = new WeatherSource();
        const cityPromise = weatherSource.getWeatherForCity(city);
        cityPromise.then(cityData => {
            this.cities.push(cityData);
            // pokazać kafelek z pogodą
            const cityWeather = new Weather(cityData);
            const cities = document.querySelector('#cities');
            cities.innerHTML += cityWeather.render();
            // zapisać nowe miasto w LocStorage
            const stor = new LocStorage();
            stor.setData(cityData);
        });
    };
}
