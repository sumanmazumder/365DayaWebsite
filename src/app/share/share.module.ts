import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
    InnerBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    
    InnerBannerComponent
  ]
})
export class ShareModule {
  static forRoot(){
    return{
      ngModule: ShareModule,
      providers:[]
    }
  }
}
