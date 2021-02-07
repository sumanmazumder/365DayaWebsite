import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InnerBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InnerBannerComponent
  ]
})
export class CoreModule { }
