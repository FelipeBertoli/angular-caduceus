import { Component, Input } from '@angular/core';

@Component({
  selector: 'management-item',
  templateUrl: './management-item.component.html'
})
export class ManagementItemComponent {
  @Input() page:string = '';
  @Input() role:string = '';
}
