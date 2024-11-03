import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagHistory: string[] = [];
    private apiGifsKey: string = 'KLC7l6VYyShffuFhkZI8IkhLxr5cDsHu';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs'


    constructor( private http: HttpClient ) { }
    
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

        const params = new HttpParams()
            .set('api_key', this.apiGifsKey)
            .set('limit', '10')
            .set('q', tag)

        this.http.get(`${this.serviceUrl}/search`, { params })
            .subscribe( resp => console.log(resp));
    }
}