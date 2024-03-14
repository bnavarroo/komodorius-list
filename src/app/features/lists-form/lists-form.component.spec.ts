import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFormComponent } from './lists-form.component';

describe('ListsFormComponent', () => {
  let component: ListsFormComponent;
  let fixture: ComponentFixture<ListsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
