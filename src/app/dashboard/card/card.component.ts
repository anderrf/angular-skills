import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public card: Card;
  @Output() public onIncreaseLikeCount: EventEmitter<Card> = new EventEmitter<Card>();
  constructor() { }

  public ngOnInit(): void{
  }

  public onLike(card: Card): void{
    // TODO: incrementar o like, salvar via rest
    this.card.likes = card.likes + 1;
    this.onIncreaseLikeCount.emit(this.card);
  }

  public onShare(card: Card): void{
    // TODO: abrir o link do seu linkedin
    window.open("https://linkedin.com/in/andersonrochafarias", "_blank");
  }

}
