import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserireditarGerenteComponent } from './inserireditar-gerente.component';

describe('InserireditarGerenteComponent', () => {
  let component: InserireditarGerenteComponent;
  let fixture: ComponentFixture<InserireditarGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserireditarGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserireditarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
