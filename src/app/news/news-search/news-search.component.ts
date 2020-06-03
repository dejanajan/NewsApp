import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewsService } from '../news.service';
import { COUNTRIES } from '../../data/countries';
import { LANGUAGES } from '../../data/languages';


@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss']
})

export class NewsSearchComponent implements OnInit {

  countriesList = COUNTRIES;
  languageList = LANGUAGES; 
  countryList: string[];
  name : string;
  form: FormGroup;

  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _formBuilder: FormBuilder,
    private _apiHttp: NewsService
  ) { }

  ngOnInit():void {
    this.buildForm();
  }


    buildForm(): void {
      this.form = this._formBuilder.group({
        name:  new FormControl(''),
        country: new FormControl(''),
        language: new FormControl('')
      });
    }

    search(filters: any): void {
      Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
      this.groupFilters.emit(filters);
    }
}
