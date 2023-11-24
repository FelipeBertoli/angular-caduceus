import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MarkAppointmentComponent } from './mark-appointment/mark-appointment.component';
import { GlobalModule } from 'src/app/components/global/global.module';
import { CustomerAppointmentsComponent } from './customer-appointments/customer-appointments.component';
import { CustomerRecipesComponent } from './customer-recipes/customer-recipes.component';
import { CustomerRecordsComponent } from './customer-records/customer-records.component';


@NgModule({
  declarations: [
    CustomerComponent,
    MarkAppointmentComponent,
    CustomerAppointmentsComponent,
    CustomerRecipesComponent,
    CustomerRecordsComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GlobalModule
  ]
})
export class CustomerModule { }
