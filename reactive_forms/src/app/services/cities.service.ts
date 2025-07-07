import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICitiesResponse } from "../interfaces/cities-response/cities-response.interface";
import { CitiesList } from "../types/cities-list";

@Injectable({
    providedIn: 'root',
})
export class CitiesService {
    constructor(
        private readonly _httpCLient: HttpClient
    ) {}

    getCities(countryName: string, stateName: string): Observable<CitiesList> {
        return this._httpCLient.post<ICitiesResponse>(
            'https://countriesnow.space/api/v0.1/countries/state/cities',
            {
                country: countryName,
                state: stateName,
            }
        ).pipe(
            map((citiesResponse) => {
                return citiesResponse.data;
            }),
        );
    }
}
