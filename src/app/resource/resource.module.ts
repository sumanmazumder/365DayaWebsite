import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { ResourceRoutingModule } from './resource-routing.module';
import { WhyUsComponent } from './why-us/why-us.component';

@NgModule({
  declarations: [
    AboutUsComponent, BlogComponent, WhyUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ResourceRoutingModule
  ],
  exports:[
    AboutUsComponent, BlogComponent 
  ]
})
export class ResourceModule { }
