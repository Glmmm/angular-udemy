import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-descripton-map';

@Component({
  selector: 'app-general-informations-edit',
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.scss'
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {
  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
  @Input({ required: true }) statesList: StatesList = [];

  @Output('onCountrySelected') onCountrySelectedEmitt = new EventEmitter<string>();

  ngOnInit() {
    this.watchCountryFormChangesAndFilter();

    this.watchStateFormChangesAndFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }
  
  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }
  
  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.onCountrySelectedEmitt.emit(event.option.value);
  }

  private watchCountryFormChangesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));
    // this.countryControl.valueChanges.subscribe((value: string) => this.filterCountriesList(value));
  }

  private filterCountriesList(searchTerm: string) {
    if(!searchTerm) return;

    this.countriesListFiltered = this.countriesList.filter(
      (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }

  private watchStateFormChangesAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterStatesList(searchTerm: string) {
    if(!searchTerm) return;

    this.statesListFiltered = this.statesList.filter(
      (state) => state.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }
}
