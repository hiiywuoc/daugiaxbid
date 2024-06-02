import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutClinetComponent } from './layout-clinet.component';

describe('LayoutClinetComponent', () => {
  let component: LayoutClinetComponent;
  let fixture: ComponentFixture<LayoutClinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutClinetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
