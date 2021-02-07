import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './components/home/home.component';

import { HospitalManagementComponent } from './components/products/hospital-management/hospital-management.component';
import { ProductsComponent } from './components/products/products.component';
import { CrmDevelopmentComponent } from './components/products/crm-development/crm-development.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
// import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalManagementComponent,
    ProductsComponent,
    CrmDevelopmentComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
