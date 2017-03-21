import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckinService {
    private url = 'http://localhost:3005';
    private socket: any;

    getUsers() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('checkin', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
