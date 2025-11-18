import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { IngredientListComponent } from '../ingredient/ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule],
  exports: [RecipeListComponent, RecipeDetailComponent, IngredientListComponent],
})
export class RecipeModule {}
