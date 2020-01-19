import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('InputName', {static: true}) Ing_name: ElementRef;
  @ViewChild('InputAmt', {static: true}) Ing_amt: ElementRef;
  @Output() onAddIng= new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit() {
  }
  add_Ing(){
    const newIngredient = new ingredient(this.Ing_name.nativeElement.value,this.Ing_amt.nativeElement.value);
    this.onAddIng.emit(newIngredient);
    this.Ing_name.nativeElement.value="";
    this.Ing_amt.nativeElement.value="";
  }
}
