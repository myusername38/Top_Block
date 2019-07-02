import { Component } from '@angular/core';
import {Player} from "./player"
import {PlayerLeadersService} from "./services/player-leaders.service"
import { NewsPostsService } from './services/news-posts.service'
import { Post } from 'src/app/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'topblock';
  public players: Player[];
  public posts: Post[];

constructor(private _playerLeadersService: PlayerLeadersService, 
  private _newsPostsService: NewsPostsService ){}
  ngOnInit(){
    this._playerLeadersService.getTopIslands()
      .subscribe(data => this.players = data);
    this._newsPostsService.getPosts()
      .subscribe(data => this.posts = data);
  }
}
