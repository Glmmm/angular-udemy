import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsListService } from '../../../../services/posts-list.service';
import { Observable, of } from 'rxjs';
import { PostsListResponse } from '../../../../types/posts-list-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  postsList$: Observable<PostsListResponse> = of([]);

  private readonly _postsListService = inject(PostsListService);
  private readonly _activaredRoute = inject(ActivatedRoute);

  ngOnInit() {
    this._activaredRoute.parent?.params.subscribe(
      (params) => this.postsList$ = this._postsListService.getUserPosts(params['userId']),
    );
  }
}
