import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EditarMedicoComponent } from './editar-medico.component';

describe('EditarMedicoComponent', () => {
  let component: EditarMedicoComponent;
  let fixture: ComponentFixture<EditarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
