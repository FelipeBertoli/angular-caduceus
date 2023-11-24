import { Component, Input } from '@angular/core';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html'
})
export class AppointmentItemComponent {
@Input() role:string = ''; 
}
