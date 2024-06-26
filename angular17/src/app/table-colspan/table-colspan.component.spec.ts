import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColspanComponent } from './table-colspan.component';

describe('TableColspanComponent', () => {
  let component: TableColspanComponent;
  let fixture: ComponentFixture<TableColspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableColspanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableColspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
