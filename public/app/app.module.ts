import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChatComponent} from './chat/chat.component';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
      ChatComponent,
      FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
