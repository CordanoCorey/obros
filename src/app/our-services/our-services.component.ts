import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Image, SmartComponent, build } from '@caiu/library';
import { Store } from '@ngrx/store';

import { EmailComponent } from '../shared/email/email.component';

@Component({
  selector: 'obros-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent extends SmartComponent implements OnInit {

  constructor(public store: Store<any>, public dialog: MatDialog) {
    super(store);
  }

  get images(): Image[] {
    return [
      build(Image, { src: 'assets/instructors-manual.jpg', height: 406, width: 313 }),
      build(Image, { src: 'assets/cover.jpg', height: 1350, width: 1077 }),
      build(Image, { src: 'assets/cover-alt.jpg', height: 475, width: 379 }),
      build(Image, { src: 'assets/btbm-instructors-manual.PNG', height: 374, width: 303 }),
      build(Image, { src: 'assets/btbm-instructors-manual-cover.PNG', height: 376, width: 304 }),
      build(Image, { src: 'assets/btbm-cover.PNG', height: 375, width: 302 }),
      build(Image, { src: 'assets/btbm-best-practices-manual.PNG', height: 375, width: 299 }),
      build(Image, { src: 'assets/btbm.PNG', height: 376, width: 301 }),
    ];
  }



  openEmail(subject = '') {
    this.openDialog(EmailComponent, {
      width: '600px',
      data: {
        subject
      }
    });
  }

  ngOnInit() {
  }

}
