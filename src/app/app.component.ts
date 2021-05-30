import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SubmitForm';
  menuItems: MenuItem[]=[
    {
      label: 'Sign Up',
      icon: 'login',
      routerLink: 'submit'
    },
    {
      label: 'Login',
      icon: 'login',
      routerLink: 'login'
    }
  ];
 
}
