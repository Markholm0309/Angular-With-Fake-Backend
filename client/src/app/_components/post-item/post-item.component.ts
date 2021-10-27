import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from 'src/app/_models/post';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeletePost: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(post) {
    this.onDeletePost.emit(post);
  }
}
