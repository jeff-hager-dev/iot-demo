import { Component, OnInit,OnDestroy } from '@angular/core';
import { StadiumSeatsService }       from './stadiumSeats.service';

@Component({
    selector: 'stadium-seat-component',
    templateUrl: './app/stadiumSeats/stadiumSeats.component.html',
    providers: [StadiumSeatsService]
})
export class StadiumSeatsComponent implements OnInit, OnDestroy {
    users: any[] = [];
    messages: any = [];
    connection: any;
    message: any;
    count: number = 20;

    constructor(private stadiumSeatsService:StadiumSeatsService) {}

    sendMessage(){
        this.stadiumSeatsService.sendMessage(this.message);
        this.message = '';
        for(let index = 0; index < this.count; index++) {
            let user = {
                id: 1,
                name: "Lauren",
                gender: "F",
                isStanding: true
            };
            if (index == 1 || index == 2) {
                user.name = null;
            }
            if (index == 3 || index == 4 || index == 7) {
                user.isStanding = false;
            }
            if (index == 3 || index == 6 || index == 5) {
                user.gender = "M";
            }
            this.users.push(user);
        }
    }

    ngOnInit() {
        this.connection = this.stadiumSeatsService.getMessages().subscribe(message => {
            this.messages.push(message);

        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
