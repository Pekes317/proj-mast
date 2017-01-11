/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkylineComponent } from './skyline.component';

describe('SkylineComponent', () => {
  let component: SkylineComponent;
  let fixture: ComponentFixture<SkylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
