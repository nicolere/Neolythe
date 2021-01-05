import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  public quoteContent: string;
  public quoteAuthor: string;
  private next: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.quoteContent = "I recommand to use this app, great job guys ! You're such amazing, hope you'll find a job losers";
    this.quoteAuthor = " @S. Jobs";

    this.quoteRotation();

    setInterval( () => { this.quoteRotation(); }, 3500);
  }

  private quoteRotation(): void {
    this.next++;

    switch(this.next){
      case 1:
        this.quoteContent = "I recommand to use this app, great job guys !"
        this.quoteAuthor = " @S. Jobs";
        break;
      case 2:
        this.quoteContent = "I recommand to use this app, great job guys ! You're such amazing, hope you'll find a job losers";
        this.quoteAuthor = " @S. Jobs";
        break;
      case 3:
        this.quoteContent = "I recommand to use this app, great job guys ! You'll find a job losers";
        this.quoteAuthor = " @S. Jobs";
        this.next = 0;
        break;
    }
    this.fadeIn()

    setTimeout( () => { this.fadeOut(); }, 2000)
  }

  public fadeIn(): void {
    var el = document.getElementById('quote-text');
    el.classList.remove('quote-hidden');
    el.classList.add('quote-shown');
  }
  public fadeOut(): void {
    var el = document.getElementById('quote-text');
    el.classList.remove('quote-shown');
    el.classList.add('quote-hidden');
  }
}
