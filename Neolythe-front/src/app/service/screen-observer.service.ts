import { Injectable } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Observable, Subscription } from "rxjs";
import { distinctUntilChanged, tap, map, filter } from 'rxjs/operators';

@Injectable()
export class ScreenObserverService {

    private activeMediaQuery: any = [];

    constructor(private mediaObserver: MediaObserver){}

    getActiveMediaQuery() {
        return this.mediaObserver.asObservable()
        .pipe(
        distinctUntilChanged((prev: MediaChange[], curr: MediaChange[]) => prev[0].mqAlias === curr[0].mqAlias),
        map((arr: MediaChange[]) => arr.map((change: MediaChange) => change.mqAlias)),
        tap(change => this.activeMediaQuery.push(change)),
        )
    }
}