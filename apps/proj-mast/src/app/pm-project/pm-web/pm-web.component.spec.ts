/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmWebComponent } from './pm-web.component';

describe('PmWebComponent', () => {
  let component: PmWebComponent;
  let fixture: ComponentFixture<PmWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
