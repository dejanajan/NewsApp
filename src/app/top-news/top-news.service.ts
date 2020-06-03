import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrcTop, RspTop } from '../model/interfaces';

@Injectable({
    providedIn: 'root'
  })

export class TopNewsService{

    loading: boolean;
    constructor(
        private http: HttpClient
    ){
        this.loading = false;
    }

    apiKey = 'bb0aba6d795f40fa96d359a431a692cc';

    configUrl = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${this.apiKey}`;

    async getTopNews(): Promise<SrcTop[]> {
        try{
            let response = await this.http.get<RspTop>(this.configUrl).toPromise();
            return response.articles;
        }
        catch(error){
            await console.log('error', error);
        };
    } 
}