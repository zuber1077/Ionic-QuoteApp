import { QuotesPage } from './../quotes/quotes';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  // add data or use quote data
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  quotesPage = QuotesPage;

ngOnInit(){
    this.quoteCollection = quotes;
}


}
