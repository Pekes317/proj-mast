/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmSkylineComponent } from './pm-skyline.component';

describe('PmSkylineComponent', () => {
  let component: PmSkylineComponent;
  let fixture: ComponentFixture<PmSkylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmSkylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmSkylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
