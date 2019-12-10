import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'obros-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() height: number;
  @Input() isMobile = false;
  @Output() contactUs = new EventEmitter<string>();
  @Output() scrollTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
