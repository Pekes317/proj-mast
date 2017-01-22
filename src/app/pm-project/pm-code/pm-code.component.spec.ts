/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmCodeComponent } from './pm-code.component';

describe('PmCodeComponent', () => {
  let component: PmCodeComponent;
  let fixture: ComponentFixture<PmCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
