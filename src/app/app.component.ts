import { Component, HostListener } from '@angular/core';
import { SmartComponent, WindowActions, build, WindowResize } from '@caiu/library';
import { Store } from '@ngrx/store';

@Component({
  selector: 'obros-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends SmartComponent {

  constructor(
    public store: Store<any>
  ) {
    super(store);
  }

  @HostListener('window:load', ['$event'])
  onLoad(e: any) {
    const windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    const windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    this.dispatch(WindowActions.resize(build(WindowResize, { windowHeight, windowWidth })));
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    const windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    const windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    this.dispatch(WindowActions.resize(build(WindowResize, { windowHeight, windowWidth })));
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(e: any) {
    const windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    const windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    this.dispatch(WindowActions.resize(build(WindowResize, { windowHeight, windowWidth })));
  }
}
