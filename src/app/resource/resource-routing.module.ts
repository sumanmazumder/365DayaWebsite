import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { WhyUsComponent } from './why-us/why-us.component';
const routes: Routes = [
  {
    path: '',  pathMatch : 'full', redirectTo :'about' 
  },
  {
    path: 'about', 
    component: AboutUsComponent
  },
  {
    path: 'blog', 
    component: BlogComponent
  },
  {
    path: 'whyUs', 
    component: WhyUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
