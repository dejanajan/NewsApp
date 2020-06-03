import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../app/news/news.service';
import { ActivatedRoute } from "@angular/router";
import { Source } from '../model/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  newsCategory: string;
  filters: Source[];

  constructor(
    private newsService: NewsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() { }
}
