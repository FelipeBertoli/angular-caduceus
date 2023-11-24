import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-caduceus';
  showMenu: boolean = false;
  showMedicMenu: boolean = false;
  showPatientMenu: boolean = false;


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !event.url.includes('login');
        this.showMedicMenu = event.url.includes('medic');
        this.showPatientMenu = event.url.includes('customer')
        
      } 
    });
  }
}
