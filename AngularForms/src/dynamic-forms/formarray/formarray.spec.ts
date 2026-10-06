import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formarray } from './formarray';

describe('Formarray', () => {
  let component: Formarray;
  let fixture: ComponentFixture<Formarray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formarray],
    }).compileComponents();

    fixture = TestBed.createComponent(Formarray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
