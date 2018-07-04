import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWhichSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Testy Schrizel','trtyuutyuy','../assets/download.jpeg'),
   new Recipe('Testy Schrizel','trtyuutyuy','../assets/download.jpeg')
]
public imgWidth='50px';
  public imgHeight='60px';
  public padding ='20px';
  public float='right';
  
  constructor() { }

  ngOnInit() {
  }
  onRecipe(recipe:Recipe){
    this.recipeWhichSelected.emit(recipe);
  }
}
