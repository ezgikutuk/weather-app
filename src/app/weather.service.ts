import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=00898331aba6a4e31db03f9267d0ecf9&query=' + location
    );
  }
}
