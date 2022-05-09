import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodgallComponent } from './foodgall.component';

describe('FoodgallComponent', () => {
  let component: FoodgallComponent;
  let fixture: ComponentFixture<FoodgallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodgallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodgallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
