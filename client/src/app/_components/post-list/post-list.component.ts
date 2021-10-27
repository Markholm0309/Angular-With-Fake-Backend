import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post';
import { PostsService } from 'src/app/_services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  deletePost(post: Post) {
    this.postService.deletePost(post).subscribe(() => (
      this.posts.filter((p) => p.id !== post.id)
    ));
  }
}
