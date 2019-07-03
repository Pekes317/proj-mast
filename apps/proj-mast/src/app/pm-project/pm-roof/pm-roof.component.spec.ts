/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmRoofComponent } from './pm-roof.component';

describe('PmRoofComponent', () => {
  let component: PmRoofComponent;
  let fixture: ComponentFixture<PmRoofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmRoofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmRoofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
