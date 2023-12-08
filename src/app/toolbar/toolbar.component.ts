import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  userEmail$: Observable<string>;

  constructor(public authService: AuthService) {
    this.userEmail$ = authService.checkLoggedInUser();
  }

  logOut() {
    this.authService.logout();
  }

}
