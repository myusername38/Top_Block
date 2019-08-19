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

  ranks: Rank[] = [];
  selectedRank: Rank = null;
  navigationSubscription = null;

  constructor(private rankService: RanksService,  private router: Router ) {
    this.rankService.getRanks().subscribe(data => this.ranks = data);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  selectRank(rank: Rank) {
    this.selectedRank = this.ranks.find(r => r.name === rank.name);
  }

  reset() {
    this.selectedRank = null;
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
