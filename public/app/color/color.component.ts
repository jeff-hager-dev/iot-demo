import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from './color.service';
import { ColorPickerService, Rgba } from 'angular2-color-picker';

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

    constructor(private colorService: ColorService) {
    }

    setColor(color: string, user: number) {
<<<<<<< HEAD
        this.colorService.setColor(user, color);
=======
        this.colorService.setColor(user, color.slice(1));
>>>>>>> f16c67dad82b66f9cf45307bf5ccb557a7456b21
    }

    setAllColors(color: string){
        this.colors.forEach((userColor) => {
           userColor.color = color;
           this.colorService.setColor(userColor.number, userColor.color.slice(1));
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


