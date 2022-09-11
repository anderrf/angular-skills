import { CardService } from './../services/card.service';
import { Card } from './../models/Card';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cards: Array<Card>;
  @Output() public onStartLoading: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onEndLoading: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private cardService: CardService
    ) { }

  public ngOnInit(): void{
    this.onStartLoading.emit();
    this.getSkills();
  }

  public getSkills(): void{
    this.cardService.getCards()
    .subscribe(
      (ret) => {
        this.cards = [...ret];
      },
      () => {
        if(!this.cards || !this.cards.length){
          this.cards = [];
        }
      },
      () => {
        this.onEndLoading.emit();
      }
    );
  }

  public updateLikeCount(card: Card): void{
    this.onStartLoading.emit();
    this.cardService.updateCardLikeCount(card)
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
          this.cards.find(cardToFind => cardToFind.id == card.id).likes = card.likes - 1;
        },
        () => {
          this.onEndLoading.emit();
        }
      );
  }

}
