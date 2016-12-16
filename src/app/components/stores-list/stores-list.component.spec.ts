/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DummyComponent } from '../../app-testing';
import { StoresListComponent } from './stores-list.component';
import { StoresService } from '../../services/stores/stores.service';
import { SessionService } from '../../services/session/session.service';


describe('StoresListComponent', () => {
  let component: StoresListComponent;
  let fixture: ComponentFixture<StoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([
          {path: '', component: DummyComponent},
          {path: 'stores', component: DummyComponent}
        ])
      ],
      declarations: [StoresListComponent, DummyComponent],
      providers: [StoresService, SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
