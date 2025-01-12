import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-live-chat-input',
  templateUrl: './live-chat-input.component.html',
  styleUrls: ['./live-chat-input.component.css']
})
export class LiveChatInputComponent implements OnInit {
  content:string = '';
  @Output() contentEmitter = new EventEmitter();
  @ViewChild('messageFrom') messageFrom: NgForm|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
    if(this.content.trim() !== ""){
      this.contentEmitter.emit(this.content);
    }
    this.content='';

  }

}
