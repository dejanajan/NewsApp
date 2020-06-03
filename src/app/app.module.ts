import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//having imported HttpClientModule into the AppModule, you can inject the HttpClient into an application class 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsSearchComponent } from './news/news-search/news-search.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { TopNewsComponent } from './top-news/top-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsSearchComponent,
    NewsListComponent,
    TopNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxPaginationModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: TopNewsComponent
   },],
  bootstrap: [AppComponent]
})
export class AppModule { }
