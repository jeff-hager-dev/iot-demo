import { Component, OnInit,OnDestroy } from '@angular/core';
import { ReactionService } from './reaction.service';
import * as moment from 'moment';

@Component({
    selector: 'reaction-component',
    templateUrl: './app/reaction/reaction.component.html',
    styleUrls: ['./app/reaction/reaction.component.css'],
    providers: [ReactionService]
})

export class ReactionComponent implements OnInit, OnDestroy {
    reactions: any[] = [];
    connection: any;
    message: any;
    countdown: any = 3;
    isCountdown: boolean = false;
    startTime: Date;

    constructor(private reactionService:ReactionService) {}

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
        let existing = this.reactions.filter(reaction => reaction.id == newReaction.id);
        if (existing.length == 0 && this.startTime) {
            this.reactions.push(newReaction);
        }
    }

    ngOnInit() {
        this.connection = this.reactionService.getReactions().subscribe(reaction => {
            this.createNewReaction(reaction);
            console.log(reaction);
        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
