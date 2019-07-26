import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class NewsPostsService {
private post_url = "../../assets/posts.json";


constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]> (this.post_url);
  }
}
