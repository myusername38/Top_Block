import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Rank } from 'src/app/rank';

@Component({
  selector: 'app-rank-page',
  templateUrl: './rank-page.component.html',
  styleUrls: ['./rank-page.component.scss']
})
export class RankPageComponent implements OnInit {

  @Input()
  rank : Rank;

  @Output()
  goBack = new EventEmitter();

  abilities: String[];

  ngOnInit() {

  }

  backButtonClicked(){
    this.goBack.emit();
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


