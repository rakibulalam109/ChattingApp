import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveChatHomeComponent } from './live-chat-home/live-chat-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { LiveChatInputComponent } from './live-chat-input/live-chat-input.component';
import { LiveChatMessagesComponent } from './live-chat-messages/live-chat-messages.component';
import { LivePrivateChatComponent } from './live-private-chat/live-private-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveChatHomeComponent,
    LiveChatComponent,
    LiveChatInputComponent,
    LiveChatMessagesComponent,
    LivePrivateChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
