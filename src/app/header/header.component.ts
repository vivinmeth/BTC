import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header';
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  selectFeature(feature: string){
    this.featureSelected.emit(feature);
  }

}