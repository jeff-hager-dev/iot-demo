import { Component, OnInit,OnDestroy } from '@angular/core';
import { StadiumSeatsService }       from './stadiumSeats.service';
import { CheckinService }       from '../checkin.service';

@Component({
    selector: 'stadium-seat-component',
    templateUrl: './app/stadiumSeats/stadiumSeats.component.html',
    styleUrls: ['./app/stadiumSeats/stadiumSeats.component.css'],
    providers: [StadiumSeatsService, CheckinService]
})
export class StadiumSeatsComponent implements OnInit, OnDestroy {
    users: any[] = [];
    standConnection: any;
    checkinConnection: any;
    count: number = 20;

    constructor(private stadiumSeatsService:StadiumSeatsService, private checkinService: CheckinService) {}

    setUsers() {
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
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe(user => {
            this.users.push(user);
        });

        this.checkinConnection = this.checkinService.getUsers().subscribe(user => {
            this.users.push(user);
        });

        this.setUsers();
    }

    ngOnDestroy() {
        this.standConnection.unsubscribe();
        this.checkinConnection.unsubscribe();
    }
}
