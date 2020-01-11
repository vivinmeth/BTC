import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient("water",1),
    new ingredient("sugar",1),

  ];
  constructor() { }

  ngOnInit() {
  }

}
