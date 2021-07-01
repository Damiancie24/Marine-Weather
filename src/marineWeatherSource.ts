import { MarineWeatherModel } from './marineWeather.model';

export class MarineWeatherSource {

  apiKey = 'de7ad792-2a07-11eb-8db0-0242ac130002-de7ad80a-2a07-11eb-8db0-0242ac130002';
  // const lat1 = 58.7984;
  // const lng2 = 17.8081;
  // const params = 'waveHeight,airTemperature,windSpeed,windDirection,gustwaveHeight,waveDirection,pressure,humidity';
  // const stormGlassUrl = `https://api.stormglass.io/v2/weather/point?lat=${this.lat}lng=${this.lng}&params=${this.params}`;
  // const marinePromise = fetch(this.stormGlassUrl);
  constructor() { }

  getWeatherForMarine(lat: number, lng: number): Promise<MarineWeatherModel> {
    const params = 'waveHeight,airTemperature,windSpeed,windDirection,gustwaveHeight,waveDirection,pressure,humidity';
    const stormGlassUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=noaa&key=${this.apiKey}`;
    const marinePromise = fetch(stormGlassUrl);
    return marinePromise
      .then(
        (responseObject) => {
          console.log('promise resolved', responseObject);
          return responseObject.json();
        }
      )
      // .then(data => {
      //   const ret: MarineWeatherModel = {
      //     latitude: ,
      //     londitude: ,
      //     temperature: ,
      //     windSpeed: ,
      //     windDirection: ,
      //     gust: ,
      //     waveHeight: ,
      //     waveDirection: ,
      //     pressure: ,
      //     humidity: 
      //   },
      //   return ret;
      // });
  }

}
// const lat = 58.7984;
// const lng = 17.8081;
// const params = 'waveHeight,airTemperature';

// fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': 'example-api-key'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//   // Do something with response data.
// });
// https://api.stormglass.io/v2/weather/point?lat=58.7984&lng=17.8081&params=waveHeight,airTemperature&