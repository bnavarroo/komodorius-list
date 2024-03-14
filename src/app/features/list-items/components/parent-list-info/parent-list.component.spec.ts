import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentListInfoComponent } from './parent-list-info.component';

describe('ParentListInfoComponent', () => {
  let component: ParentListInfoComponent;
  let fixture: ComponentFixture<ParentListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentListInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
