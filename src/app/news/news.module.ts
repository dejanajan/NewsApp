import { NgModule } from '@angular/core';
import { FilterPipe } from './news.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsComponent } from '../news/news.component';
import { NewsSearchComponent } from '../news/news-search/news-search.component';
import { NewsListComponent } from '../news/news-list/news-list.component';



@NgModule({
    declarations: [
        NewsComponent,
        NewsSearchComponent,
        NewsListComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
  })

  export class newsModule { }