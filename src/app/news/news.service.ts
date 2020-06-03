import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, throwError  } from 'rxjs';
import { map } from 'rxjs/operators';
import { Source, Response } from '../model/interfaces';

@Injectable({
    providedIn: 'root'
  })

export class NewsService {

    setGroupFilter$ = new Subject<any>();
    getGroupFiltr$ = this.setGroupFilter$.asObservable();

    constructor(
        private http: HttpClient
    ){}

    apiKey = 'bb0aba6d795f40fa96d359a431a692cc';

    configUrl = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}`;

    public getNewsCategory(category: string): Observable<Source[]> {
        return this.http
        .get<Response>(`${this.configUrl}&category=${category}`)
        .pipe(
            map(response => response.sources)
        );
    }
 
}