import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Hot Water","A Simple Recipe to Make Hot Water","https://www.rd.com/wp-content/uploads/2017/09/01_hotwater_Surprising-Benefits-of-Drinking-Hot-Water_10126957-Baevskiy-Dmitry-760x506.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
