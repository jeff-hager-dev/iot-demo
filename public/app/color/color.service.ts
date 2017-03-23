//import { Http } from '@angular/http';

export class ColorService {
    private url = 'http://localhost:3005/1/#CCCCCC';

    constructor() {}

    setColor(number: any, color: any) {
        alert('color service called');
        //this.http.get(this.url)
        //.then(function(response: any) {
        //    alert('response was called!');
        //})
    }
}