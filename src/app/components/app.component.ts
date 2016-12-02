import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { Session } from '../classes/session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  loginFacebookUrl: string = environment.API_BASE_URL + '/auth/login/facebook';

  session: Session;

  constructor (private sessionService: SessionService) {}

  ngOnInit (): void {
    this.getSession();
  }

  getSession () {
    this.sessionService.getSession().subscribe(
      session => {
        this.session = (Object.keys(session).length !== 0) ? session : null;
      }
    );
  }

  logout () {
    this.sessionService.logout().subscribe(
      session => this.session = null
    );
  }
}
