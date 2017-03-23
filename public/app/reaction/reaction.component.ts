import { Component, OnInit,OnDestroy } from '@angular/core';
import { ReactionService } from './reaction.service';
import { CheckinService }       from '../checkin.service';
import * as moment from 'moment';

@Component({
    selector: 'reaction-component',
    templateUrl: './app/reaction/reaction.component.html',
    styleUrls: ['./app/reaction/reaction.component.css'],
    providers: [ReactionService, CheckinService]
})

export class ReactionComponent implements OnInit, OnDestroy {
    users: any[] = [];
    reactions: any[] = [];
    disqualified: any[] = [];
    connection: any;
    message: any;
    countdown: any = 3;
    isCountdown: boolean = false;
    startTime: Date;
    checkInConnection: any;

    constructor(private reactionService:ReactionService,
                private checkinService: CheckinService) {}

    startCountdown() {
        this.isCountdown = true;
        setTimeout(() => {
            this.countdown = 2;
            setTimeout(() => {
                this.countdown = 1;
                setTimeout(() => {
                    this.countdown = "GO!";
                    this.startTime = new Date();
                    setTimeout(() => {
                        this.isCountdown = false;
                        this.countdown = 3;
                    }, 5000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    createNewReaction(reaction: any) {
        let now  = reaction.time;
        let then = this.startTime;

        let diff = moment(now, "YYYY-MM-DD HH:mm:ss.SSSZ").diff(moment(then));
        let d = moment.duration(diff);
        let s = Math.floor(d.asHours()) + moment.utc(diff).format(":mm:ss");
        let newReaction = {
            id: reaction.number,
            time: s
        };
        for(let user of this.users) {
            if(user.number == (newReaction.id)){
                newReaction.id = user.name;
            }
        }
        let existing = this.reactions.filter(reaction => reaction.id == newReaction.id);
        if (existing.length == 0 && this.startTime) {
            this.reactions.push(newReaction);
        } else if (existing.length == 0 && !this.startTime) {
            this.disqualified.push(newReaction);
        }
    }

    checkInUsers(){
        this.checkInConnection = this.checkinService.getUsers().subscribe((data: any) => {
            if(data instanceof Array && data.length > 0){
                for(var info of data){
                    for(var user of this.users) {
                        if(user.number == (info.number||-1)){
                            user.name = info.name;
                        }
                    }
                }
            }
            else{
                for(var user of this.users) {
                    if(user.number == (data.number||-1)){
                        user.name = data.name;
                    }
                }
            }
        });
    }

    ngOnInit() {
        this.connection = this.reactionService.getReactions().subscribe(reaction => {
            this.createNewReaction(reaction);
            console.log(reaction);
        });
        this.checkInUsers();
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
        this.checkInConnection.unsubscribe();
    }
}
