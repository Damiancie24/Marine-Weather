import { CityWeather } from './cityWeather.model';
export class LocStorage {
    readonly key = 'data';

    getData(): CityWeather[] {
        const rawData = localStorage.getItem(this.key);
        return JSON.parse(rawData);
    }

    setData(data: CityWeather[]): void {
        const processedData = JSON.stringify(data);
        localStorage.setItem(this.key, processedData);
    }

}