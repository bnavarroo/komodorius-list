import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableContainerComponent } from './responsive-table-container.component';

describe('ResponsiveTableContainerComponent', () => {
  let component: ResponsiveTableContainerComponent;
  let fixture: ComponentFixture<ResponsiveTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveTableContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsiveTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
