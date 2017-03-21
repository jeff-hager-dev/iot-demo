import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ReactionService {
    private url = 'http://localhost:3005';
    private socket: any;

    getReactions() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('reaction', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
