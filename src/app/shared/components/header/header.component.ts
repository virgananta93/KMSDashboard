import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) {

  }

  imageUrl() {
    return "url('https://source.unsplash.com/random/40x40?face')";
  }
  
  @Input() sidenav: MatSidenav

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias)
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    )
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }


}
