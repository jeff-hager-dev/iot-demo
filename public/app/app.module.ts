import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StadiumSeatsComponent} from './stadiumSeats/stadiumSeats.component';
import {ReactionComponent} from './reaction/reaction.component';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
    StadiumSeatsComponent,
    ReactionComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
