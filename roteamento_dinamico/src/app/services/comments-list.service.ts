import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CommentsListResponse } from "../types/comments-list-response";

@Injectable({
    providedIn: 'root',
})
export class CommentsListService {
    private readonly _http = inject(HttpClient);

    getPostComments(postId: string): Observable<CommentsListResponse> {
        return this._http.get<CommentsListResponse>('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
    }
}
