import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechTopicsComponent } from './speech-topics.component';

describe('SpeechTopicsComponent', () => {
  let component: SpeechTopicsComponent;
  let fixture: ComponentFixture<SpeechTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
