import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input()
  activePage: string;

  mobileMenu: boolean = null;

  constructor( private router: Router ) { }

  ngOnInit() {
   console.log(this.activePage);

   const apples = -1;
   if (apples) {

   }
  }
  buttonClicked(){
    console.log('click');
  }
  setActivePage(page: string){
    this.mobileMenu = null;
    switch(page){
      case 'Home':
        this.activePage = page;
        this.router.navigate(['/']);
        break;
      case 'Ranks':
        this.activePage = page;
        this.router.navigate(['/ranks']);
        break;
      case 'Discord':
        this.activePage = page;
        this.router.navigate(['/discord']);
        break;
      case 'VotingLinks':
        this.activePage = page;
        this.router.navigate(['/votinglinks']);
        break;
      case 'LeaderBoards':
        this.activePage = page;
        this.router.navigate(['/leaderboards']);
        break;
      default:
        this.activePage = 'Home';
        this.router.navigate(['/']);
    }
  }
  showMobileMenu(){
    this.mobileMenu = true;
  }
}
