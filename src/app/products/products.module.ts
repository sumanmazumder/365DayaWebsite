import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { CrmDevelopmentComponent } from './crm-development/crm-development.component';
import { HospitalManagementComponent } from './hospital-management/hospital-management.component';
import { ShareModule } from '../share/share.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    CrmDevelopmentComponent,
    HospitalManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    ShareModule.forRoot(),
    MatFormFieldModule , MatInputModule, MatSelectModule
  ],
  exports: [
    CrmDevelopmentComponent,
    HospitalManagementComponent
  ]
})
export class ProductsModule { }
