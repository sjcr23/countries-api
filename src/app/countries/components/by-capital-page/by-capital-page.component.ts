import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent implements OnInit {

  public countries:Country[] = [];
  public capitalValue: string = '';
  public isLoading:boolean = true;

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byCapital.countries;
    this.capitalValue = this.countriesService.cacheStorage.byCapital.term;
  }

  searchByCapital(query:string):void {
    console.log('From ByCapitalPage');
    console.log({ query });

    this.countriesService.searchCapital(query)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
