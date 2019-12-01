import { NgModule } from '@angular/core';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './our-services.component';
import { SharedModule } from '../shared/shared.module';
import { SpeechTopicsComponent } from './speech-topics/speech-topics.component';


@NgModule({
  declarations: [OurServicesComponent, SpeechTopicsComponent],
  imports: [
    SharedModule,
    OurServicesRoutingModule
  ],
  exports: [
    OurServicesComponent
  ]
})
export class OurServicesModule { }
