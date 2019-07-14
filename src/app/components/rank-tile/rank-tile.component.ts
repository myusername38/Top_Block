import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rank } from 'src/app/rank';

@Component({
  selector: 'app-rank-tile',
  templateUrl: './rank-tile.component.html',
  styleUrls: ['./rank-tile.component.scss']
})
export class RankTileComponent implements OnInit {

  @Input()
  rank : Rank

  @Output()
  rankEmitter = new EventEmitter();

  picture: String;
  name: String;
  ngOnInit() {
    this.picture = this.rank.picture;
    this.name = this.rank.name;
  }
  rankClicked() {
    this.rankEmitter.emit(this.name);
  }
  getColor(color: string) {
    switch (color) {
      case 'Pawn':
        return '#49c431';
      case 'Knight':
        return '#285fd0';
      case 'Rook':
        return '#c9e521';
      case 'Queen':
        return '#e47ece';
      case 'King':
        return '#ec3131';
    }
  }

}
