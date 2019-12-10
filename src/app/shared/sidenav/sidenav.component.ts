import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'obros-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() height: number;
  @Input() isMobile = false;

  constructor() { }

  ngOnInit() {
  }

}
