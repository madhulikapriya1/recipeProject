import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
 import { Recipe } from "../../recipe.model";


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input()  recipe: Recipe; 
  @Output() recipeSelected = new EventEmitter<void>();
     public imgWidth='50px';
    public imgHeight='60px';
    public padding ='20px';
    public float='right';
  constructor() { }

  ngOnInit() {
  }
  onClick(){
   this.recipeSelected.emit();
  }
}
