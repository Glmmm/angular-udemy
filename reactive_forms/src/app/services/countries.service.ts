import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICountriesResponse } from "../interfaces/countries-response/countries-response.interface";
import { CountriesList } from "../types/countries-list";

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    constructor(
        private readonly _httpClient: HttpClient
    ) {}

    getCountries(): Observable<CountriesList> {
        return this._httpClient.get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((countriesResponse) => {
                return countriesResponse.data;
            }),
        );
    }
}
