import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChatComponent} from './chat/chat.component';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
    ChatComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
