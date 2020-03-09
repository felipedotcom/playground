import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Primeiro artigo',
        content: '',
        description: "Meu primeiro artigo, leia :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'Segundo artigo',
        content: '',
        description: "Meu segundo artigo, leia :)",
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular-soldBlack.png'
    }
]