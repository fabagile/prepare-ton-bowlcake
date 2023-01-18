import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleIngredientComponent } from './handle-ingredient.component';

describe('HandleIngredientComponent', () => {
  let component: HandleIngredientComponent;
  let fixture: ComponentFixture<HandleIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
