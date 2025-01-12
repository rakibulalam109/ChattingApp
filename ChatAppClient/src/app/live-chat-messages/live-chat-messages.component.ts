import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../Models/Message';

@Component({
  selector: 'app-live-chat-messages',
  templateUrl: './live-chat-messages.component.html',
  styleUrls: ['./live-chat-messages.component.css']
})
export class LiveChatMessagesComponent implements OnInit {
  @Input() messages: Message[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
