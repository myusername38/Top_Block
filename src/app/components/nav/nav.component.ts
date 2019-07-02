import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input()
  activePage: String;

  constructor() { }

  ngOnInit() {
   console.log(this.activePage);

   const apples = -1;
   if (apples) {

   }
  }

}
