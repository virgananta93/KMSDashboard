import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { onMainContentChange } from 'src/app/animations';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  animations: [ onMainContentChange ]

})

export class DefaultComponent implements OnInit {
  sidebarState: string;
  public onSideNavChange: boolean;

  constructor(
    private titleService: Title,
    private sidebarService: SidebarService,
    private breadcrumbService: BreadcrumbService
  ) { 
    this.sidebarService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    
   
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'KMS Dashboard';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }
  private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }
}