import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public isLoading!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = false;
  }

  public setLoading(): void{
    this.isLoading = true;
  }

  public endLoading(): void{
    this.isLoading = false;
  }

}
