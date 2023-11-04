import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEquipesComponent } from './list-of-equipes.component';

describe('ListOfEquipesComponent', () => {
  let component: ListOfEquipesComponent;
  let fixture: ComponentFixture<ListOfEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfEquipesComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
