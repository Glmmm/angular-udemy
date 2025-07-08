import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { TodosListResponse } from "../types/todos-list-response";

@Injectable({
    providedIn: 'root',
})
export class TodosListService {
    private readonly _http = inject(HttpClient);

    getUserTodos(userId: string): Observable<TodosListResponse> {
        return this._http.get<TodosListResponse>('https://jsonplaceholder.typicode.com/todos?userId=' + userId);
    }
}
