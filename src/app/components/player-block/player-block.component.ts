import { Component, OnInit, Input } from '@angular/core';
import {Player} from "src/app/player"

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.scss']
})
export class PlayerBlockComponent implements OnInit {
  @Input()
    player: Player;
  
    playerHead: string;
    playerName: string;
  constructor() { }

  ngOnInit() {
    this.playerHead = "http://visage.surgeplay.com/head/75/" + this.player.uuid + ".png"
    this.playerName = this.player.name;
  }

}
