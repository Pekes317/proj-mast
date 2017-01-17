/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmDarkKnightComponent } from './pm-dark-knight.component';

describe('PmDarkKnightComponent', () => {
  let component: PmDarkKnightComponent;
  let fixture: ComponentFixture<PmDarkKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmDarkKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmDarkKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
