/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoresListComponent } from './stores-list.component';

describe('StoresListComponent', () => {
  let component: StoresListComponent;
  let fixture: ComponentFixture<StoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresListComponent ]
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
