import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveChatHomeComponent } from './live-chat-home/live-chat-home.component';

const routes: Routes = [
  {path:'',component:LiveChatHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
