import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class CheckinService {
    private socket: any;
    
    getUsers() {
        let observable = new Observable((observer:any) => {
            this.socket = io(Config.socketUrl);
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
