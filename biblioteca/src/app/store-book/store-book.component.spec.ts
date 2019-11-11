import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBookComponent } from './store-book.component';

describe('StoreBookComponent', () => {
  let component: StoreBookComponent;
  let fixture: ComponentFixture<StoreBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
