import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-title',
  templateUrl: './main-title.component.html'
})
export class MainTitleComponent {
  @Input() page: string = '';
}
