import { Injectable } from '@angular/core';
import { Ingredient } from "./ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
   new Ingredient('Tomato', 15),
  ];
  ingredientAdd = new EventEmitter<Ingredient[]>();
  shoppingListEdit = new Subject<number>();
getIngredients(){
  return this.ingredients.slice();
}

  getIngredient(index:number){
    return this.ingredients.slice[index];

  }
//   The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// Note: The original array will not be changed.

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientAdd.emit(this.ingredients.slice());
}

updatengredient(index:number, newIngredient:Ingredient){
  this.ingredients[index] = newIngredient;
  this.ingredientAdd.next(this.ingredients.slice());
}

deleteIngredient(index:number){
this.ingredients.splice(index,1);
  this.ingredientAdd.next(this.ingredients.slice());
}

  constructor() { }
}
