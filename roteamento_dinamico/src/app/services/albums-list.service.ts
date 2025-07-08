import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AlbumsListResponse } from "../types/albums-list-response";

@Injectable({
    providedIn: 'root',
})
export class AlbumsListService {
    private readonly _http = inject(HttpClient);

    getUserAlbums(userId: string): Observable<AlbumsListResponse> {
        return this._http.get<AlbumsListResponse>('https://jsonplaceholder.typicode.com/albums?userId=' + userId);
    }
}
