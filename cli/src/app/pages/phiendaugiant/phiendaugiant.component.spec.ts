import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiendaugiantComponent } from './phiendaugiant.component';

describe('PhiendaugiantComponent', () => {
  let component: PhiendaugiantComponent;
  let fixture: ComponentFixture<PhiendaugiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhiendaugiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhiendaugiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
