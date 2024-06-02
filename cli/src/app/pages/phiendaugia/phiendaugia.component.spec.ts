import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiendaugiaComponent } from './phiendaugia.component';

describe('PhiendaugiaComponent', () => {
  let component: PhiendaugiaComponent;
  let fixture: ComponentFixture<PhiendaugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhiendaugiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhiendaugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
