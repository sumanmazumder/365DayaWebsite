import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';;
// import {MatInputModule} from '@angular/material/input';

import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { ShareModule } from './share/share.module';
// import { LoginModule } from './login/login.module';
// import { ServicesModule } from './services/services.module';
import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    // ServicesModule
    ShareModule, 
    // LoginModule,

    BrowserAnimationsModule,
    // MatFormFieldModule, MatInputModule

  ],
  // exports :[],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
