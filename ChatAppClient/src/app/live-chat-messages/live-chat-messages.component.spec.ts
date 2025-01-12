import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatMessagesComponent } from './live-chat-messages.component';

describe('LiveChatMessagesComponent', () => {
  let component: LiveChatMessagesComponent;
  let fixture: ComponentFixture<LiveChatMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChatMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
