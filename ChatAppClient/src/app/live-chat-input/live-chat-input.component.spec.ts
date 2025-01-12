import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatInputComponent } from './live-chat-input.component';

describe('LiveChatInputComponent', () => {
  let component: LiveChatInputComponent;
  let fixture: ComponentFixture<LiveChatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChatInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
