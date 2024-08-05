import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, take, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url:string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  public cacheStorage: CacheStore = {
    byCapital:    { term: '', countries: [] },
    byCountries:  { term: '', countries: [] },
    byRegion:     { region: '', countries: [] },
  }


  private saveToLocalStorage():void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStorage));
  }

  private loadLocalStorage():void {
    const storage = localStorage.getItem('cacheStore');
    if ( !storage ) return;
    this.cacheStorage = JSON.parse(storage);
  }

  private getCountriesRequest(url:string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( error => of([]) )
    );
  }

  searchById(query:string):Observable<Country | null> {
    const requestUrl = `${ this.url }/alpha/${ query }`;
    return this.httpClient.get<Country[]>(requestUrl)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError( error => of(null))
    );
  }

  searchCapital(term:string):Observable<Country[]> {
    const requestUrl = `${ this.url }/capital/${ term }`;
    return this.getCountriesRequest(requestUrl)
      .pipe(
        tap(countries => this.cacheStorage.byCapital = { term, countries } ),
        tap( ()=> this.saveToLocalStorage())
      );
  }

  searchCountry(term:string):Observable<Country[]> {
    const requestUrl = `${ this.url }/name/${ term }`;
    return this.httpClient.get<Country[]>(requestUrl)
    .pipe(
      tap(countries => this.cacheStorage.byCountries = { term, countries } ),
      tap( ()=> this.saveToLocalStorage())
    );
  }

  searchRegion(region:Region):Observable<Country[]> {
    const requestUrl = `${ this.url }/region/${ region }`;
    return this.getCountriesRequest(requestUrl)
    .pipe(
      tap(countries => this.cacheStorage.byRegion = { region, countries } ),
      tap( ()=> this.saveToLocalStorage())
    );;
  }
}
