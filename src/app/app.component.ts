import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTC';

  @Output() content_selected: string = 'recipe';
  

  navigate(navitem: string){
    this.content_selected=navitem;  

  }
}
