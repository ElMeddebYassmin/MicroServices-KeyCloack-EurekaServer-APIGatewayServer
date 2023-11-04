import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfEtudiantsComponent } from './list-of-etudiants.component';


describe('ListOfEtudiantsComponent', () => {
  let component: ListOfEtudiantsComponent;
  let fixture: ComponentFixture<ListOfEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfEtudiantsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
