import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';



@Component({
  selector: 'app-newsbox',
  templateUrl: './newsbox.component.html',
  styleUrls: ['./newsbox.component.scss']
})
export class NewsboxComponent implements OnInit {

  @Input()
    post: Post;

    name: string;
    title: string;
    uuid: string;
    date: string;
    news: string;

  ngOnInit() {
    this.name = this.post.name;
    this.title = this.post.title;
    this.uuid = this.post.uuid;
    this.date = this.post.date;
    this.news = this.post.news;
  }

  checkPost(post) {
    if (post.includes('<script>') || post.includes('</script>')) {
      return 'No scripts in the news';
    }
    return post.replace(/\n/g, '<br />');
  }
}
