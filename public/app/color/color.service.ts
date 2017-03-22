import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ColorService {
    private url = 'http://localhost:3005';
    private socket: any;

    getColors() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('color', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}