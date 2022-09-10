import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    this.card.likes = card.likes + 1;
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    window.open("https://linkedin.com/in/andersonrochafarias", "_blank");
  }

}
