import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ManagementItemComponent } from './management-item/management-item.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';



@NgModule({
  declarations: [
    MainTitleComponent,
    UserItemComponent,
    ManagementItemComponent,
    AppointmentItemComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    MainTitleComponent,
    UserItemComponent,
    ManagementItemComponent,
    AppointmentItemComponent
  ],
})
export class GlobalModule { }
