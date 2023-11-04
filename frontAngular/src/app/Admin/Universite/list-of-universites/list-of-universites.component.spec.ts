import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUniversitesComponent } from './list-of-universites.component';

describe('ListOfUniversitesComponent', () => {
  let component: ListOfUniversitesComponent;
  let fixture: ComponentFixture<ListOfUniversitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfUniversitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUniversitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
