import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LiveChatService } from '../Services/live-chat.service';

@Component({
  selector: 'app-live-private-chat',
  templateUrl: './live-private-chat.component.html',
  styleUrls: ['./live-private-chat.component.css']
})
export class LivePrivateChatComponent implements OnInit,OnDestroy {
  @Input() toUser = '';

  constructor(public activeModal: NgbActiveModal, public chatService: LiveChatService) { }
  ngOnDestroy(): void {
    this.chatService.closePrivateChatMessage(this.toUser);
  }

  ngOnInit(): void {
  }

  sendMessage(content: string){
    this.chatService.sendPrivateMessage(this.toUser,content);
  }

}
