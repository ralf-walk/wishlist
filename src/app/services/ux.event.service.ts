import {ConnectableObservable, Observable, Observer} from 'rxjs'
import {Injectable} from '@angular/core';

export interface UxEvent {
  type: string;
  payload: any;
}

@Injectable()
export class UxEventService {

  observer: Observer<UxEvent>;
  observable$: ConnectableObservable<UxEvent>;

  constructor() {
    const observable: Observable<UxEvent> = Observable.create((observer) => {
      this.observer = observer;
    });
    this.observable$ = observable.publish();
    this.observable$.connect();
  }

  fireEvent(event: UxEvent) {
    this.observer.next(event);
  }

  observe(): Observable<UxEvent> {
    return this.observable$;
  }
}
