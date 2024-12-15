import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essay1Component } from './essay-1.component';

describe('Essay1Component', () => {
  let component: Essay1Component;
  let fixture: ComponentFixture<Essay1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Essay1Component]
    });
    fixture = TestBed.createComponent(Essay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
