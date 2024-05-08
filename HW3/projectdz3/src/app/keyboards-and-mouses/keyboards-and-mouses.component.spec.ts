import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardsAndMousesComponent } from './keyboards-and-mouses.component';

describe('KeyboardsAndMousesComponent', () => {
  let component: KeyboardsAndMousesComponent;
  let fixture: ComponentFixture<KeyboardsAndMousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardsAndMousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardsAndMousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
