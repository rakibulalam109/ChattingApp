import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePrivateChatComponent } from './live-private-chat.component';

describe('LivePrivateChatComponent', () => {
  let component: LivePrivateChatComponent;
  let fixture: ComponentFixture<LivePrivateChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePrivateChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePrivateChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
