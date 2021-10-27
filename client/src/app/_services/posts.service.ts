import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.apiKey;
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'posts');
  }

  deletePost(post: Post): Observable<Post> {
    const url = this.baseUrl + `posts/${post.id}`;
    return this.http.delete<Post>(url);
  }
}
