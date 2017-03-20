import { Component, OnInit,OnDestroy } from '@angular/core';
import { ReactionService }       from './reaction.service';

@Component({
    selector: 'reaction-component',
    templateUrl: './app/reaction/reaction.component.html',
    styleUrls: ['./app/reaction/reaction.component.css'],
    providers: [ReactionService]
})
export class ReactionComponent implements OnInit, OnDestroy {
    users: any[] = [];
    reactions: any = [];
    connection: any;
    message: any;
    count: number = 20;

    constructor(private reactionService:ReactionService) {}

    ngOnInit() {
        this.connection = this.reactionService.getReactions().subscribe(reaction => {
            this.reactions.push(reaction);
        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
