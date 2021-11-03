import { Injectable } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Observable } from "rxjs";
import { distinctUntilChanged, tap, map } from 'rxjs/operators';

@Injectable()
export class ScreenObserverService {

    private activeMediaQuery: string[][] = [];
    private _mediaObserver: MediaObserver;

    constructor(private mediaObserver: MediaObserver){
        this._mediaObserver = mediaObserver;
    }

    public getActiveMediaQuery(): Observable<string[]> {
        return this._mediaObserver.asObservable()
        .pipe(
        distinctUntilChanged((prev: MediaChange[], curr: MediaChange[]) => prev[0].mqAlias === curr[0].mqAlias),
        map((arr: MediaChange[]) => arr.map((change: MediaChange) => change.mqAlias)),
        tap(change => this.activeMediaQuery.push(change)),
        )
    }
}