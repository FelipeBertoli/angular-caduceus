import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicRoutingModule } from './medic-routing.module';
import { MedicComponent } from './medic.component';
import { PatientsComponent } from './patients/patients.component';;
import { MedicAppointmentsComponent } from './medic-appointments/medic-appointments.component';
import { AppointmentItemComponent } from 'src/app/components/global/appointment-item/appointment-item.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ManagementItemComponent } from 'src/app/components/global/management-item/management-item.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { GlobalModule } from 'src/app/components/global/global.module';

@NgModule({
  declarations: [
    MedicComponent,
    PatientsComponent,
    MedicAppointmentsComponent,
    CertificatesComponent,
    RecipesComponent,
    CreateRecordComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    MedicRoutingModule,
    GlobalModule
  ]
})
export class MedicModule { }
