/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmBioComponent } from './pm-bio.component';

describe('PmBioComponent', () => {
  let component: PmBioComponent;
  let fixture: ComponentFixture<PmBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
