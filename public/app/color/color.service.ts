import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ColorService {
    private baseUrl = 'http://localhost:3005/api/color';

    constructor(private http: Http) {}

    setColor(number: any, color: any) {
        let url = this.baseUrl + '/' + number + '/%23' + color;
        let headers = new Headers({ 'content-type': 'application/json', 'accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(url, options)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe();
    }
}