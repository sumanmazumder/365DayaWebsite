import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { RouterModule } from '@angular/router';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    DigitalMarketingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ServicesRoutingModule
  ],
  exports: [
    DigitalMarketingComponent
  ]
})
export class ServicesModule { }
