import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongdaugiaComponent } from './phongdaugia.component';

describe('PhongdaugiaComponent', () => {
  let component: PhongdaugiaComponent;
  let fixture: ComponentFixture<PhongdaugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhongdaugiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhongdaugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
