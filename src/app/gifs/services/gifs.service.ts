import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagHistory: string[] = [];
    constructor() { }
    
    get tagHistory(): string[] {
        return [...this._tagHistory];
    }

    private organizeHistory( tag: string){
        tag = tag.toLowerCase();

        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter((oldTag) => oldTag != tag )
        }

        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.slice(0,10);
    }

    searchTag( tag: string):void {
        if (tag === "") return
        this.organizeHistory(tag);
    }
}