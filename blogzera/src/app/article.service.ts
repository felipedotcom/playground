import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { ARTICLES } from './mock-articles';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { 

  }

  getArticle(): Observable<Article[]>{
    const articles: Article[] = ARTICLES
    return of(articles) 
  }
}
