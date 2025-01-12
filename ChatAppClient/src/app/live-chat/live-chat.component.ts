import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { LiveChatService } from '../Services/live-chat.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivePrivateChatComponent } from '../live-private-chat/live-private-chat.component';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit, OnDestroy {
  @Output() closeChatEmitter = new EventEmitter();

  constructor( public chatService:LiveChatService,private modalService: NgbModal) { }
  ngOnDestroy(): void {
    this.chatService.stopChatConnection();
  }

  ngOnInit(): void {
    this.chatService.createChatConnection();
  }
  backToHome(){
    this.closeChatEmitter.emit();
  }
  sendMessage(content:string){
    this.chatService.sendMessage(content);
  }
  openPrivateChat(toUser:string){
    const modalRef = this.modalService.open(LivePrivateChatComponent);
    modalRef.componentInstance.toUser = toUser;

  }

}
