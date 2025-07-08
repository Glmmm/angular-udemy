import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { UsersListResponse } from "../types/users-list-response";
import { IUser } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root',
})
export class UsersListService {
    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users');
    }

    getUser(userId: string): Observable<IUser> {
        return this._http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + userId);
    }
}
