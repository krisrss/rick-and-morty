import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getChars() {
    return this.httpClient.get("https://rickandmortyapi.com/api/character");
  }

  public getCharsByName(name: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
  }

  public getCharsByGender(gender: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?gender=${gender}`);
  }

  public getCharsByNameAndGender(name: string, gender: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`);
  }

  //----------

  public getLocations() {
    return this.httpClient.get("https://rickandmortyapi.com/api/location");
  }

  public getLocationsByName(name: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/location/?name=${name}`);
  }

  public getLocationsByDimension(dimension: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/location/?dimension=${dimension}`);
  }

  public getLocationsByNameAndDimension(name: string, dimension: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/location/?name=${name}&dimension=${dimension}`);
  }

  public getNextPage(url: string) {
    return this.httpClient.get(url);
  }

  public getCharsByIds(ids: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/${ids}`);
  }

  public getLocationsByIds(ids: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/location/${ids}`);
  }

  public getDataFromPage(url: string) {
    return this.httpClient.get(url);
  }

  public getEpisodes() {
    return this.httpClient.get("https://rickandmortyapi.com/api/episode");
  }

  public getEpisodesByName(name: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/episode/?name=${name}`);
  }

  public getEpisodesByIds(ids: string) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/episode/${ids}`);
  }

}
