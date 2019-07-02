import { Component, OnInit } from '@angular/core';
import { RanksService } from 'src/app/services/ranks.service';
import { Rank } from 'src/app/rank';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.scss']
})
export class RanksComponent implements OnInit {
  rankSelected: boolean = false; 
  selectedRank: string; 
  ranks: Rank[] = [];
  pawn: Rank;
  knight: Rank;
  rook: Rank; 
  queen: Rank; 
  king: Rank;

  constructor(private _rankService: RanksService) { 
    this._rankService.getRanks().subscribe(data => this.ranks = data);
  }

  ngOnInit() {
    this.pawn = this.ranks[0];
    this.knight = this.ranks[1]; 
    this.rook = this.ranks[2]; 
    this.queen = this.ranks[3];
    this.king = this.ranks[4];
  }
  getRank(){
    return this.ranks.find(r => r.name === this.selectedRank);
  }
  showRank(name){
    this.rankSelected = true; 
    this.selectedRank = name; 
  }
  resetRanks(){
    console.log("resetRanks");
    this.rankSelected = false; 
  }
}
