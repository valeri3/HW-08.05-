import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelsComponent } from './cabels.component';

describe('CabelsComponent', () => {
  let component: CabelsComponent;
  let fixture: ComponentFixture<CabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
