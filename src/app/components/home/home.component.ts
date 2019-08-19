import { Component, OnInit } from '@angular/core';
import { PlayerLeadersService } from 'src/app/services/player-leaders.service';
import { NewsPostsService } from 'src/app/services/news-posts.service';
import { Player } from 'src/app/player';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public players: Player[];
  public posts: Post[];

  constructor(private _playerLeadersService: PlayerLeadersService,
  private _newsPostsService: NewsPostsService ){ }

  ngOnInit() {
    this._playerLeadersService.getTopIslands()
    .subscribe(data => this.players = data);
  this._newsPostsService.getPosts()
    .subscribe(data => this.posts = data);
  }
}
