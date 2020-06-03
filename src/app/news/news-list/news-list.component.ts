import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { Source } from '../../model/interfaces';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

  @Input() groupFilters : Source[];

  news: any[] = [];
  newsCategory: Source[] = [];
  newsByCategory: string;
  p: number = 1;
  

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  ngOnChanges(): void {
    if(this.groupFilters) this.filterNewsList(this.groupFilters, this.news);
  }

  filterNewsList(filters: any, news: any): void {
    this.newsCategory = this.news; // reset News List

    const keys = Object.keys(filters);
    const newsFilter = news => keys.every(key => news[key] === filters[key]);

    this.newsCategory = this.news.filter(newsFilter);
    this.ref.detectChanges();
  }

  loadNews(): void {
    this.newsByCategory = this.route.snapshot.routeConfig.path;
  
    this.newsService.getNewsCategory(this.newsByCategory).subscribe(data => {
      this.news = data;
      this.newsCategory = this.newsCategory.length > 0 ? this.newsCategory : this.news;
    },
      (err: string) => {
        alert(err);
      });
  }
}
