import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// import { ProductsComponent } from './components/products/products.component';
// import { ProductsComponent } from './components/products/products.component';
// import { HospitalManagementComponent } from './components/products/hospital-management/hospital-management.component';
// import { CrmDevelopmentComponent } from './components/products/crm-development/crm-development.component';
// import { AboutUsComponent } from './components/about-us/about-us.component';
// import { BlogComponent } from './components/blog/blog.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  
    {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
    {path: 'products', loadChildren: ()=> import('./products/products.module').then(m=>m.ProductsModule)},
    {path: 'login', loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
    {path: 'resource', loadChildren: ()=> import('./resource/resource.module').then(m=>m.ResourceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
