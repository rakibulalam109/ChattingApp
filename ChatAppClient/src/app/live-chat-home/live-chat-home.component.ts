import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiveChatService } from '../Services/live-chat.service';

@Component({
  selector: 'app-live-chat-home',
  templateUrl: './live-chat-home.component.html',
  styleUrls: ['./live-chat-home.component.css']
})
export class LiveChatHomeComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  submitted = false;
  apiErrorMessage: string[] = [];
  openChat=false;

  constructor(private formbuilder: FormBuilder, private chatService: LiveChatService) { }

  ngOnInit(): void {
    this.initialzeForm();
  }

  initialzeForm() {
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });

  }

  submitForm() {
    this.submitted = true;
    this.apiErrorMessage = [];

    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.chatService.registerUser(this.userForm.value).subscribe({
        next: () => {
          this.chatService.myName = this.userForm.get('name')?.value;
          this.openChat = true;
          this.userForm.reset();
          this.submitted = false;

        },
        error: error => {
          if (typeof (error.error) !== 'object') {
            this.apiErrorMessage.push(error.error);
          }
        }
      })
    }
  }

  closeChat(){
    this.openChat= false;
  }

}
