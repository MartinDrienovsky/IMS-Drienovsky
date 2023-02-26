import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateModelComponent } from './calculate-model.component';

describe('CalculateModelComponent', () => {
  let component: CalculateModelComponent;
  let fixture: ComponentFixture<CalculateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

