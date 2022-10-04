import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingBroComponent } from './two-way-binding-bro.component';

describe('TwoWayBindingBroComponent', () => {
  let component: TwoWayBindingBroComponent;
  let fixture: ComponentFixture<TwoWayBindingBroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindingBroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingBroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
