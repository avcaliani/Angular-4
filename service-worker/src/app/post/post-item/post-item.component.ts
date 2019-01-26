import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html'
})
export class PostItemComponent {
  @Input() post: Post;
}
