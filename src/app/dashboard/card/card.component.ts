import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Output() onIncreaseLikeCount: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    this.card.likes = card.likes + 1;
    this.onIncreaseLikeCount.emit(this.card);
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    window.open("https://linkedin.com/in/andersonrochafarias", "_blank");
  }

}
