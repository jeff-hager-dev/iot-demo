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
    color: string = 'fff';
    count: number = 20;
    animateCount: number = 0;
    animateColors: string[] = ['ff0000', 'ff7f00', 'FFFF00', '00ff00', '00ffff', '0000ff', '8B00ff', '8B00ff', '0000ff', '00ffff', '00ff00', 'FFFF00', 'ff7f00', 'ff0000'];
    currentAnimateColor: number = -1;
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

    startAnimation() {
        console.log('click worked!');
        this.animateCount = 0;
        let timer = TimerObservable.create(200, 300);
        this.subscription = timer.subscribe(t => {
            if (this.animateCount >= this.count*this.animateColors.length) { 
                return this.subscription.unsubscribe(); 
            }
            

            let currentBlockNumber = (t%this.count)+1;
            let blockIndex = this.colors.findIndex(c => c.number == currentBlockNumber);
            if (blockIndex == -1) { return; } 

            if(currentBlockNumber == 1){ this.currentAnimateColor += 1; }
            let currentColor = this.animateColors[this.currentAnimateColor];
            this.colors[blockIndex].color = '#'+currentColor;
            this.colorService.setColor(blockIndex, currentColor);
            
            this.animateCount++;
        });
    }

    stopAnimation() {
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }

    setupColors() {
        for(let index = 0; index < this.count; index++) {
            this.colors.push({
                number: (index+1),
                color: '#'+this.color
            });
        }
    }

    ngOnInit() {
        this.setupColors();
    }

    ngOnDestroy() {
    }
}


