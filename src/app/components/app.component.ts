import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { User } from '../classes/user';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

  loginFacebookUrl: string = environment.API_BASE_URL + '/auth/login/facebook';

  user: User;

  constructor (private sessionService: SessionService) {}

  ngOnInit (): void {
    this.getSessionUser();
  }

  getSessionUser () {
    this.sessionService.getSessionUser().subscribe(
      session => {
        this.user = (Object.keys(session).length !== 0) ? session : null;
      }
    );
  }

  logout () {
    this.sessionService.logout().subscribe(
      session => this.user = null
    );
  }
}
