import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicComponent } from './medic.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicAppointmentsComponent } from './medic-appointments/medic-appointments.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
  {

        path: 'patients',
        component: PatientsComponent,
      },
      {
        path: 'appointments',
        component: MedicAppointmentsComponent,
      },
      {
        path: 'certificates',
        component: CertificatesComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
        path: 'create-record',
        component: CreateRecordComponent
      },
      {
        path: 'create-recipe',
        component: CreateRecipeComponent
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicRoutingModule {}
