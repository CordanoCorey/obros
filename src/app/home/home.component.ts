import { Component, OnInit } from '@angular/core';
import { SmartComponent, windowHeightSelector, windowWidthSelector } from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'obros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends SmartComponent implements OnInit {
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

  onmScroll(e) {
    console.dir(e);
  }

}
