import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'obros-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  _subject = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.subject = data.subject;
  }

  @Input()
  set subject(value: string) {
    this._subject = value;
  }

  get subject(): string {
    return this._subject;
  }

  ngOnInit() {
  }

}
