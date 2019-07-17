import { Component, OnInit, OnDestroy } from '@angular/core';
import { RanksService } from 'src/app/services/ranks.service';
import { Rank } from 'src/app/rank';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.scss']
})
export class RanksComponent implements OnInit, OnDestroy {
  rankSelected: boolean = false;
  selectedRank: string;
  ranks: Rank[] = [];
  pawn: Rank;
  knight: Rank;
  rook: Rank;
  queen: Rank;
  king: Rank;
  navigationSubscription = null;

  constructor(private _rankService: RanksService,  private router: Router ) {
    this._rankService.getRanks().subscribe(data => this.ranks = data);
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.rankSelected = false;
      }
    });
  }

  ngOnInit() {
    this.pawn = this.ranks[0];
    this.knight = this.ranks[1];
    this.rook = this.ranks[2];
    this.queen = this.ranks[3];
    this.king = this.ranks[4];
  }

  ngOnDestroy() {
    if(this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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
