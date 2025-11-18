import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ingredienteMasUsado: string = "";

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipeDetail(id).subscribe({
      next: (data) => {
        this.recipe = data;
        this.calcularIngredienteMasUsado();
      },
      error: (err) => {
        console.error('Error cargando detalle:', err);
      }
    });
  }

  calcularIngredienteMasUsado(){
    if (!this.recipe) return; 

    let mayor =0;
    let nombreMayor ="";

    this.recipe.ingredientes.forEach(ing => {
      const numero = parseInt(ing.cantidad.split(' ')[0]);
      if (numero > mayor){
        mayor = numero;
        nombreMayor = ing.nombre;
      }  
    });
    this.ingredienteMasUsado= nombreMayor;
  }

  goBack() {
  this.router.navigate(['/recipe']);
  }
}
