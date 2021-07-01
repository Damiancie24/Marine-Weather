import { NewMarine } from './newMarine';
import { NewCity } from './newCity';
import { LocStorage } from './locStorage';
import { WeatherSource } from './weatherSource';
import { Weather } from './weather';
import { CityWeather } from './cityWeather.model';

export class App {
    newCity: NewCity;
    cities: CityWeather[] = [];
    newMarine: NewMarine;
    constructor() {
        this.start();
    }
    start(): void {
        this.newCity = new NewCity(this.onNewCity);
        const stor = new LocStorage();
        this.cities = stor.getData() ?? [];
        for (let cityData of this.cities) {
            this.renderCity(cityData);
        }
        this.newMarine = new NewMarine(this.oneMarine);
    }
    renderCity(cityData: CityWeather): void {
        const cityWeather = new Weather(cityData);
        const cities = document.querySelector('#cities');
        cities.innerHTML += cityWeather.render();

    }
    onNewCity = (city: string): void => {

        // pobrać pogodę dla miasta
        const weatherSource = new WeatherSource();
        const cityPromise = weatherSource.getWeatherForCity(city);
        cityPromise.then(cityData => {
            this.cities.push(cityData);
            // pokazać kafelek z pogodą
            this.renderCity(cityData);

            // zapisać nowe miasto w LocStorage
            const stor = new LocStorage();
            stor.setData(this.cities);
        });
    };

    oneMarine = (lat: string, lng: string): void => {
        console.log('oneMarine Working!!')
    }
}
