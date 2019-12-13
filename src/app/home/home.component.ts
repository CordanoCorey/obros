import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { SmartComponent, windowHeightSelector, windowWidthSelector } from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest } from 'rxjs';

import { AboutUsComponent } from '../about-us/about-us.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'obros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyinRight', [
      transition(':enter', [
        style({ right: '-1000px' }),
        animate('1.5s', style({ right: '0px' })),
      ]),
      transition(':leave', [
        animate('1s', style({ right: '-1000px' }))
      ])]),
    trigger('flyinLeft', [
      transition(':enter', [
        style({ left: '-1000px' }),
        animate('1.5s', style({ left: '0px' })),
      ]),
      transition(':leave', [
        animate('1s', style({ left: '-1000px' }))
      ])])
  ]
})
export class HomeComponent extends SmartComponent implements OnInit, AfterViewInit {
  @ViewChild('home', { static: false }) homeEl: ElementRef;
  @ViewChild('aboutUs', { static: false }) aboutUs: AboutUsComponent;
  @ViewChild('ourServices', { static: false }) ourServices: OurServicesComponent;
  @ViewChild('img', { static: false }) imgEl: ElementRef;
  headlineFontSize$: Observable<number>;
  headlineWidth$: Observable<number>;
  scrollTop = 0;
  viewInitSubject = new Subject();
  windowHeight$: Observable<number>;
  windowWidth$: Observable<number>;

  constructor(public store: Store<any>) {
    super(store);
    this.windowHeight$ = windowHeightSelector(store);
    this.windowWidth$ = windowWidthSelector(store);
    this.headlineWidth$ = combineLatest(this.viewInitSubject.asObservable(), this.windowWidth$, (x, y) => {
      return this.imgEl ? this.imgEl.nativeElement.clientWidth : 350;
    });
    this.headlineFontSize$ = this.headlineWidth$.pipe(
      map(x => x > 955 ? 40 : 30)
    );
  }

  get top(): boolean {
    return this.scrollTop < 200;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewInitSubject.next();
    }, 1500);
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
