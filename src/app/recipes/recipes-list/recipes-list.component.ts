import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Hot Water","A Simple Recipe to Make Hot Water","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrge26jJRxSN_vnfAAdBydjSyo1BtEiSLlELl3Zt7bNu8ETLeHeg&s")
  ];
  constructor() {}

  ngOnInit() {
  }

  
  @Output() recipeSelected = new EventEmitter<Recipe>();
  selectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
