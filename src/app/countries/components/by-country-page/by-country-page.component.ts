import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries:Country[] = [];
  public countryValue: string = '';
  public isLoading:boolean = true;

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byCountries.countries;
    this.countryValue = this.countriesService.cacheStorage.byCountries.term;
  }

  searchByCountry(query:string):void {
    console.log('From ByCountryPage');
    console.log({ query });

    this.countriesService.searchCountry(query)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
