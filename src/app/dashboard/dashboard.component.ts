import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  @Output() public onStartLoading: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onEndLoading: EventEmitter<void> = new EventEmitter<void>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.onStartLoading.emit();
    this.getSkills();
  }

  public getSkills(): void{
    this.httpClient.get('/api/skills')
    .subscribe(
      (ret: Array<any>) => {
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

  public updateLikeCount(card: any): void{
    this.onStartLoading.emit();
    this.httpClient.put<any>(`/api/skills/${card.id}`, card)
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
