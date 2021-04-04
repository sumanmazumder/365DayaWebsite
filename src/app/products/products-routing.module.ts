import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrmDevelopmentComponent } from './crm-development/crm-development.component';
import { HospitalManagementComponent } from './hospital-management/hospital-management.component';

const routes: Routes = [
  {
    path: '',  pathMatch : 'full', redirectTo :'crm' 
  },
  {
    path: 'crm', 
    component: CrmDevelopmentComponent
  },
  {
    path: 'hospital', 
    component: HospitalManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
