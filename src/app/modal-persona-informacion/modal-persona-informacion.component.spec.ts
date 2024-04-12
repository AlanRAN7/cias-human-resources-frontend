import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonaInformacionComponent } from './modal-persona-informacion.component';

describe('ModalPersonaInformacionComponent', () => {
  let component: ModalPersonaInformacionComponent;
  let fixture: ComponentFixture<ModalPersonaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPersonaInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPersonaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
