import { Component, Input, inject } from '@angular/core';
import { PostsListService } from '../../../../services/posts-list.service';
import { Observable, of } from 'rxjs';
import { IPost } from '../../../../interfaces/post.interface';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post$: Observable<IPost> = of({} as IPost);

  private readonly _postsListService = inject(PostsListService);

  @Input() set postId(value: string) {
    this.post$ = this._postsListService.getPost(value);
  }
}
