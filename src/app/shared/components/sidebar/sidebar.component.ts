import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { onSideNavChange, animateText } from 'src/app/animations';


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [onSideNavChange, animateText]

})
export class SidebarComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Dashboard', link:'/dashboard', icon: 'dashboard'},
    {name: 'Registration', link:'/register', icon: 'edit'},
    {name: 'Patient', link:'/patient', icon: 'people'},
    {name: 'Analytics', link:'/analytics', icon: 'analytics'},
    {name: 'Help', link:'/', icon: 'help'},
    {name: 'Settings', link:'/', icon: 'settings'},
    {name: 'Log Out', link:'/', icon: 'logout'},

  ]

  constructor(
    private sidebarService: SidebarService
  ) { }


  ngOnInit() {
   
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this.sidebarService.sideNavState$.next(this.sideNavState)
  }
}
