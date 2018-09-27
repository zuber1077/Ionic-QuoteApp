import { QuotesService } from './../../services/quotes';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService
    ) {}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operation (?) in template to use this approach
  // }
  
  ngOnInit() {
      this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you Sure?',
      message: 'Are you sure you want to add quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorite(selectedQuote);
        }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote:Quote) {
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

}
