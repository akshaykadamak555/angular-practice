import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBubblingComponent } from './event-bubbling.component';

describe('EventBubblingComponent', () => {
  let component: EventBubblingComponent;
  let fixture: ComponentFixture<EventBubblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBubblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBubblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
