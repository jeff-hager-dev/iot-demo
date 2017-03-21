import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class StadiumSeatsService {
    private url = 'http://localhost:3005';
    private socket: any;

    sendMessage(message: any){
        this.socket.emit('add-message', message);
    }

    getMessages() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
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
