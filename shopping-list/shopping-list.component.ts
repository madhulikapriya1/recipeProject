import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from 'src/app/shared/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private subscription:Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientAdd.subscribe((ingredients:Ingredient[]) =>{
      this.ingredients = ingredients;
    })
  }

  shoppingItem(index:number){
    this.shoppingService.shoppingListEdit.next(index);
  }
// onIngredientAdd(ingredient:Ingredient){
//   this.ingredients.push(ingredient);
 
// }
}
