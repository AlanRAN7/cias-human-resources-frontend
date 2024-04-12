import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearPersonaComponent } from './modal-crear-persona.component';

describe('ModalCrearPersonaComponent', () => {
  let component: ModalCrearPersonaComponent;
  let fixture: ComponentFixture<ModalCrearPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCrearPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
