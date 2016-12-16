/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAdminComponent } from './store-admin.component';
import { SessionService } from '../../services/session/session.service';
import { StoresService } from '../../services/stores/stores.service';
import {RouterTestingModule} from "@angular/router/testing";
import {DummyComponent} from "../../app-testing";

describe('StoreAdminComponent', () => {
  let component: StoreAdminComponent;
  let fixture: ComponentFixture<StoreAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'stores/:id', component: DummyComponent}
        ])
      ],
      declarations: [ StoreAdminComponent, DummyComponent ],
      providers: [ SessionService, StoresService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
