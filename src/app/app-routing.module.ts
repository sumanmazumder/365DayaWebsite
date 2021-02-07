import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { ProductsComponent } from './components/products/products.component';
// import { HospitalManagementComponent } from './components/products/hospital-management/hospital-management.component';
// import { CrmDevelopmentComponent } from './components/products/crm-development/crm-development.component';
// import { AboutUsComponent } from './components/about-us/about-us.component';
// import { BlogComponent } from './components/blog/blog.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';

// import{ ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'home'},

  
    {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }



  // {path: "AboutUs", component: AboutUsComponent},
  // {path: "ContactUs", component: ContactUsComponent},
  // {path: "Blog", component: BlogComponent},


  
  // {path: 'products', component: ProductsComponent, children:[
  //   {path: '', redirectTo: 'hospitalManagement', pathMatch: 'full'},
  //   {path: "hospitalManagement", component: HospitalManagementComponent},
  //   {path: "CrmDevelopment", component: CrmDevelopmentComponent},
       
  // ]},
  // {path: 'Services', component: ServiceComponent, children:[
  //   {path: '', redirectTo: 'hospitalManagement', pathMatch: 'full'},
  //   {path: "DigitalMarketing", component: DigitalMarketingComponent},
       
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
