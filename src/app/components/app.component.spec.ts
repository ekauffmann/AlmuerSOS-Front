/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { DummyComponent } from '../app-testing';
import { SessionService } from '../services/session/session.service';
import { StoresService } from '../services/stores/stores.service';
import { StoresListComponent } from './stores-list/stores-list.component';


describe('App: AlmuerSOSFront', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([
          {path: '', component: DummyComponent}
        ])
      ],
      declarations: [AppComponent, StoresListComponent, DummyComponent],
      providers: [
        SessionService,
        StoresService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have Facebook login URL`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.loginFacebookUrl).toContain('/auth/login/facebook');
  }));
});
