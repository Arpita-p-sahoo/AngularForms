import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NospaceCustomValidation } from './nospace-custom-validation';

describe('NospaceCustomValidation', () => {
  let component: NospaceCustomValidation;
  let fixture: ComponentFixture<NospaceCustomValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NospaceCustomValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(NospaceCustomValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
