import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public regions:Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  public selectedRegion?: Region;

  public countries:Country[] = [];
  public isLoading:boolean = true;

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStorage.byRegion.region;
    this.countries = this.countriesService.cacheStorage.byRegion.countries;
  }

  searchByRegion(query:Region):void {
    console.log('From ByRegionPage');
    console.log({ query });

    this.selectedRegion = query;
    this.countriesService.searchRegion(query)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
