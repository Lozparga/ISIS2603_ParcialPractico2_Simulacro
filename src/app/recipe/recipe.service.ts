import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';
  private detailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) {}

  /** ✔ Lista todas las recetas */
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /** ✔ Consulta el detalle de una receta (por id) */
  getRecipeDetail(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(
    `https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/${id}/recipe.json`
  );
}

}
