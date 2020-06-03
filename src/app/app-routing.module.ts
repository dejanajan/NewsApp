import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TopNewsComponent } from './top-news/top-news.component';


const routes: Routes = [
  { path: '', redirectTo: '/general', pathMatch: 'full' },
  { path: 'general', component: NewsComponent },
  { path: 'entertainment', component: NewsComponent },
  { path: 'technology', component: NewsComponent },
  { path: 'science', component: NewsComponent },
  { path: 'health', component: NewsComponent },
  { path: 'top-news', component: TopNewsComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

