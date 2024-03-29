import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StadiumSeatsComponent } from './stadiumSeats/stadiumSeats.component';
import { HeaderComponent } from './header/header.component';
import { ReactionComponent } from './reaction/reaction.component';
import { SeatComponent } from './seat/seat.component';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component'
import { ColorPickerModule } from 'angular2-color-picker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    StadiumSeatsComponent,
    SeatComponent,
    ReactionComponent,
    HeaderComponent,
    ColorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
