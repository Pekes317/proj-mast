/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmContactComponent } from './pm-contact.component';

describe('PmContactComponent', () => {
  let component: PmContactComponent;
  let fixture: ComponentFixture<PmContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
