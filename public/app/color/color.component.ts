import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from './color.service';
import { ColorPickerService, Rgba } from 'angular2-color-picker';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

export class Color {
    number: number;
    color: string;
}

@Component({
    selector: 'color-component',
    templateUrl: './app/color/color.component.html',
    styleUrls: ['./app/color/color.component.css'],
    providers: [ColorService, ColorPickerService]
})
export class ColorComponent implements OnInit, OnDestroy {
    colors: Color[] = [];
    color: string = '#fff';
    count: number = 20;
    animateCount: number = 0;
    animateColors: string[] = ['#ff0000', '#ff7f00', '#FFFF00', '#00ff00', '#00ffff', '#0000ff', '#8B00ff', '#8B00ff', '#0000ff', '#00ffff', '#00ff00', '#FFFF00', '#ff7f00', '#ff0000'];
    subscription: Subscription;

    constructor(private colorService: ColorService) {
    }

    setColor(color: string, user: number) {
        this.colorService.setColor(user, color.slice(1));
    }

    setAllColors(color: string){
        this.colors.forEach((userColor) => {
           userColor.color = color;
           this.colorService.setColor(userColor.number, userColor.color.slice(1));
        });
    }

    animate() {
        console.log('click worked!');
        this.animateCount = 0;
        let timer = TimerObservable.create(200, 300);
        this.subscription = timer.subscribe(t => {
            console.log('tick: ' + this.animateCount);
            let index = this.colors.findIndex(c => c.number == 1)
            if (index > -1) { 
                this.colors[index].color = this.animateColors[this.animateCount];
            } else {
                this.colors.push({
                    number: 1,
                    color: this.animateColors[this.animateCount]
                });
            }
            this.colorService.setColor(1, this.animateColors[this.animateCount]);
            this.animateCount++;
            if (this.animateCount > 14) { this.subscription.unsubscribe(); }
        });
    }

    setupColors() {
        for(let index = 0; index < this.count; index++) {
            this.colors.push({
                number: (index+1),
                color: '#fff'
            });
        }
    }

    ngOnInit() {
        this.setupColors();
    }

    ngOnDestroy() {
    }
}


