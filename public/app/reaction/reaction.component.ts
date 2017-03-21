import { Component, OnInit,OnDestroy } from '@angular/core';
import { ReactionService }       from './reaction.service';

@Component({
    selector: 'reaction-component',
    templateUrl: './app/reaction/reaction.component.html',
    styleUrls: ['./app/reaction/reaction.component.css'],
    providers: [ReactionService]
})
export class ReactionComponent implements OnInit, OnDestroy {
    reactions: any = [];
    connection: any;
    message: any;
    countdown: any = 3;
    isCountdown: boolean = false;
    startTime: any;

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

    ngOnInit() {
        this.connection = this.reactionService.getReactions().subscribe(reaction => {
            this.reactions.push(reaction);
        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
