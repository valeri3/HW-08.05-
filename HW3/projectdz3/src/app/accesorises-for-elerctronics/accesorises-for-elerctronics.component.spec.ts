import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorisesForElerctronicsComponent } from './accesorises-for-elerctronics.component';

describe('AccesorisesForElerctronicsComponent', () => {
  let component: AccesorisesForElerctronicsComponent;
  let fixture: ComponentFixture<AccesorisesForElerctronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesorisesForElerctronicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesorisesForElerctronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
