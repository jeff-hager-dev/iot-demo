import { Component, Input } from '@angular/core';

@Component({
    selector: 'seat',
    templateUrl: './app/seat/seat.component.html',
    styleUrls: ['./app/seat/seat.component.css'],
})
export class SeatComponent {
    @Input() user: any;
    @Input() state: boolean;
}