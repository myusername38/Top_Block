import { Component, OnInit } from '@angular/core';
import { PlayerLeadersService } from '../../services/player-leaders.service'
import { Player } from 'src/app/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  title = 'topblock';
  public players: Player[];
  
  constructor(private _playerLeadersService: PlayerLeadersService  ){}
  ngOnInit(){
    this._playerLeadersService.getTopIslands()
      .subscribe(data => this.players = data);
  }
}
