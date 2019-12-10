import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SmartComponent, windowHeightSelector, windowWidthSelector } from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AboutUsComponent } from '../about-us/about-us.component';
import { OurServicesComponent } from '../our-services/our-services.component';

@Component({
  selector: 'obros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends SmartComponent implements OnInit {
  @ViewChild('home', { static: false }) homeEl: ElementRef;
  @ViewChild('aboutUs', { static: false }) aboutUs: AboutUsComponent;
  @ViewChild('ourServices', { static: false }) ourServices: OurServicesComponent;
  scrollTop = 0;
  windowHeight$: Observable<number>;
  windowWidth$: Observable<number>;

  constructor(public store: Store<any>) {
    super(store);
    this.windowHeight$ = windowHeightSelector(store);
    this.windowWidth$ = windowWidthSelector(store);
  }

  get top(): boolean {
    return this.scrollTop < 200;
  }

  ngOnInit() {
  }

  scrollTo(e: 'HOME' | 'ABOUT_US' | 'OUR_SERVICES') {
    switch (e) {
      case 'HOME':
        this.homeEl.nativeElement.scrollIntoView();
        break;
      case 'ABOUT_US':
        this.aboutUs.element.nativeElement.scrollIntoView();
        break;
      case 'OUR_SERVICES':
        this.ourServices.element.nativeElement.scrollIntoView();
        break;
    }
  }

  scrollIntoView(el: any) {
    if (el && el.scrollIntoView && typeof (el.scrollIntoView) === 'function') {
      el.scrollIntoView();
    }
  }

}
