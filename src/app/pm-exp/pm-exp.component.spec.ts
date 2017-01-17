/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmExpComponent } from './pm-exp.component';

describe('PmExpComponent', () => {
  let component: PmExpComponent;
  let fixture: ComponentFixture<PmExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
