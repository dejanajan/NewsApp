import { Component, OnInit } from '@angular/core';
import { TopNewsService } from './top-news.service';
import { SrcTop } from './../model/interfaces';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})


export class TopNewsComponent implements OnInit {

  topNewsResult: SrcTop[];
  p: number = 1;
  loading: boolean = false;

  constructor(
    private http: TopNewsService
  ) { }

  ngOnInit(): void {
    this.loadTopNews();
  }

  loadTopNews():void {
      this.loading = true;
      this.http.getTopNews().then((data) => {
          this.topNewsResult = data; 
          this.loading = false; 
      });
  }

}
