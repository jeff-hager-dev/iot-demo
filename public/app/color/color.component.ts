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
    //connection: any;
    //message: any;

    constructor(private colorService: ColorService) {
    }

    setColor(color: string, user: number) {
        console.log("Color set:" + color);
        this.colorService.setColor(user, color);
    }

    setAllColors(color: string){
        this.colors.forEach((userColor) => {
           userColor.color = color;
            this.colorService.setColor(userColor.number, userColor.color);
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
        /*
        this.connection = this.colorService.getColors().subscribe(color => {
            this.colors.push(color);
            console.log(color);
        })*/
    }

    ngOnDestroy() {
        //this.connection.unsubscribe();
    }
}


