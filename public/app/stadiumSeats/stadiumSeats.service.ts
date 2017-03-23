import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Config } from '../config';

export class StadiumSeatsService {
    private socket: any;

    getMessages() {
        let observable = new Observable((observer:any) => {
            this.socket = io(Config.socketUrl);
            this.socket.on('stand', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
