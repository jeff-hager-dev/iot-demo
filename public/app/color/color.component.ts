import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from './color.service';

@Component({
    selector: 'color-component',
    templateUrl: './app/color/color.component.html',
    styleUrls: ['./app/color/color.component.css'],
    providers: [ColorService]
})
export class ColorComponent implements OnInit, OnDestroy {
    colors: any = [];
    //connection: any;
    //message: any;

    constructor(private colorService: ColorService) {}

    setColor() {
        this.colorService.setColor(1, '332211');
    }


    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
