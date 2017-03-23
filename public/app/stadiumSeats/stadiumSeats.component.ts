import { Component, OnInit, OnDestroy } from '@angular/core';
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

    constructor(private stadiumSeatsService:StadiumSeatsService, 
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
                number: (index+1),
                name: null,
                gender: null,
                isStanding: null
            });
        }
    }
    updateStanding() {
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe((data: any) => {
            console.log('User standing update', data);
            for(var user of this.users) {
                if(user.number == (data.number||-1)){
                        user.isStanding = data.isStanding;
                }
            }
        });
    }

    checkinUsers(){
        this.checkinConnection = this.checkinService.getUsers().subscribe((data: any) => {
            console.log("User Checkin", data);
            if(data instanceof Array && data.length > 0){
                for(var info of data){
                    for(var user of this.users) {
                        if(user.number == (info.number||-1)){
                            user.gender = info.gender;
                            user.name = info.name;
                            user.isStanding = info.isStanding || false;
                        }
                    }
                }
            }
            else{
                for(var user of this.users) {
                    if(user.number == (data.number||-1)){
                        user.gender = data.gender;
                        user.name = data.name;
                        user.isStanding = false;
                    }
                }
            }
        });
    }
}
