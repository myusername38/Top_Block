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
  rankClicked(){
    this.rankEmitter.emit(this.name);
  }

}
