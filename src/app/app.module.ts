import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';   // ✔ IMPORTANTE

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // ✔ AGREGA ESTO
    RecipeModule
  ],
  providers: [],        // ✔ Déjalo vacío (NO VA RecipeModule)
  bootstrap: [AppComponent],
})
export class AppModule {}
