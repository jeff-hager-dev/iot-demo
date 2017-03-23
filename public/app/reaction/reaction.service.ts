import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Config } from '../config';

export class ReactionService {
    private socket: any;

    getReactions() {
        let observable = new Observable((observer:any) => {
            this.socket = io(Config.socketUrl);
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
