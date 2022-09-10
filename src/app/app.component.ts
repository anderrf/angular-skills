import { LoaderComponent } from './loader/loader.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular';
  public isLoading!: boolean;
  
  @ViewChild(LoaderComponent) loader!: LoaderComponent;
  
  ngOnInit(): void {
    this.isLoading = true;
  }
  
}
