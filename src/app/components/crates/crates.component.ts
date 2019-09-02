import { Component, OnInit, OnDestroy } from '@angular/core';
import { Crate } from '../../interfaces/crate';
import { DataService } from '../../services/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crates',
  templateUrl: './crates.component.html',
  styleUrls: ['./crates.component.scss']
})
export class CratesComponent implements OnInit, OnDestroy {

  loading = false;
  crates: Crate[] = [];
  selectedCrate: Crate = null;
  navigationSubscription: Subscription = null;

  constructor(private dataService: DataService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.reset();
      }
    });
   }

  ngOnInit() {
    this.getCrates();
  }
  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  async getCrates() {
    try {
      this.loading = true;
      this.crates = await this.dataService.getCrates();
      console.log(this.crates);
    } catch (err) {
      // error handling
    } finally {
      this.loading = false;
    }
  }

  selectCrate(crate: Crate) {
    this.selectedCrate = crate;
  }

  reset() {
    this.selectedCrate = null;
  }

  getColor(crate: string) {
    switch (crate) {
      case 'Basic Crate':
        return '#49c431';
      case 'Spawner':
        return '#8b7aa7';
      case 'God Crate':
        return '#B22222';
    }
  }
}
