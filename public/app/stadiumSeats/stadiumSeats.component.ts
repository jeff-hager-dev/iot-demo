import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
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

    constructor(private zone: NgZone,
                private stadiumSeatsService:StadiumSeatsService, 
                private checkinService: CheckinService) {}

    ngOnInit() {
        this.setupChairs();
        this.checkinUsers();
        this.updateStanding();
    }

    ngOnDestroy() {
        this.standConnection.unsubscribe();
        this.checkinConnection.unsubscribe();
    }
    setupChairs() {
        for(let index = 0; index < this.count; index++) {
            this.users.push({
                number: null,
                name: null,
                gender: null,
                isStanding: null
            });
        }
    }
    updateStanding() {
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe((data: any) => {
            console.log('User updating standing', data);
            this.zone.run(() => {
                this.users.map((user: any)=>{
                    if(user.number == data.number){
                            user.isStanding = (data.isStanding == "true");
                    }
                });
            });
        });
    }

    checkinUsers(){
        this.checkinConnection = this.checkinService.getUsers().subscribe((data: any) => {
            console.log("User Checkin", data);
            this.zone.run(() => {
                this.users.map((user: any)=>{
                if(user.number == data.number){
                    user.gender = data.gender;
                    user.name = data.name;
                    user.isStanding = false;
                }
                });
            });
        });
    }
}
