import { Component } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: any[] = [];

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.recipeService.getAllRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }
}
