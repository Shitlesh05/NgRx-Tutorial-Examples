import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/Store/app.state';
import { getPosts } from './state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  posts! : Observable<Post[]>;
  constructor(private store: Store<AppState>){}

  ngOnInit() : void {
    this.posts = this.store.select(getPosts);
  }

}
