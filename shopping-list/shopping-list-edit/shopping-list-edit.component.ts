import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  OnDestroy
} from '@angular/core';
//import { Output, Input } from "@angular/core";
//this is imporing for parent and child component communication without service.
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;
  //  @ViewChild('name')name:ElementRef;
  //   @ViewChild('amount')amount:ElementRef;

  // @Output() ingredientAdd = new EventEmitter<Ingredient>();
  //@Output() change = new EventEmitter();
  @ViewChild('myForm') myForm: FormGroup;
  

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required]),
      amount: new FormControl('', [<any>Validators.required])
    });
    //console.log(this.myForm);
    this.subscription = this.shoppingService.shoppingListEdit.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.myForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  add() {
    
    const value = this.myForm.value;
    console.log(this.myForm);
    // const newName = this.name.nativeElement.value;
    // const newAmount = this.amount.nativeElement.value;
    //const newIngredient = new Ingredient(newName, newAmount);
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log(newIngredient);
    if (this.editMode) {
      this.shoppingService.updatengredient(this.editedIndex, newIngredient);
    }else{
      this.shoppingService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.myForm;
    // this.ingredientAdd.emit(newIngredient);
    // (this is for withoutservice)

  //this.shoppingService.addIngredient(newIngredient);
  }

  // onSubmit({value, valid }: {value: myForm, valid: boolean }) {

  //   this.submitted = true;

  // }

  onClear(){
    this.myForm.reset();
  }

onDelete(){

  this.shoppingService.deleteIngredient(this.editedIndex);
  this.onClear();
}
  onSubmit(myForm: FormGroup) {
    this.shoppingService.addIngredient(myForm.value);
    console.log(myForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
