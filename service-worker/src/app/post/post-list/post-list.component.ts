import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  template: `<app-post-item *ngFor="let post of posts" [post]="post"></app-post-item>`
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (posts: Post[]) => {
        console.log('Posts', posts);
        this.posts = posts;
      },
      (err: any) => console.error(err)
    );
  }
}
