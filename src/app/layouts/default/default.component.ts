import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainContentAnimation } from '../../animations';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class DefaultComponent implements OnInit {
  sidebarState: string;
 
  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(){
    this.sidebarService.sidebarStateObservable$
    .subscribe((newState: string) => {
      this.sidebarState = newState;
    });
  }

}
