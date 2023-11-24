import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { MarkAppointmentComponent } from './mark-appointment/mark-appointment.component';
import { CustomerAppointmentsComponent } from './customer-appointments/customer-appointments.component';
import { CustomerRecipesComponent } from './customer-recipes/customer-recipes.component';
import { CustomerRecordsComponent } from './customer-records/customer-records.component';

const routes: Routes = [
  { 
    path: 'mark-appointment', component: MarkAppointmentComponent
  },
  {
    path: 'appointments', component:CustomerAppointmentsComponent
  },
  {
    path: 'records', component:CustomerRecordsComponent
  },
  {
    path: 'recipes', component: CustomerRecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
