import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsListService } from '../../../../../../services/comments-list.service';
import { Observable, of } from 'rxjs';
import { CommentsListResponse } from '../../../../../../types/comments-list-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  commentsList$: Observable<CommentsListResponse> = of([]);

  private readonly _commentsListService = inject(CommentsListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.commentsList$ = this._commentsListService.getPostComments(params['postId']),
    );
  }
}
