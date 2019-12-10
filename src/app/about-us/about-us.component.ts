import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'obros-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public element: ElementRef) { }

  ngOnInit() {
  }

}
