import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.getRecipeDetail();
  }

  getRecipeDetail(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.recipeService.getRecipeByName(name)
        .subscribe(recipe => {
          this.recipe = recipe;
        }, error => {
          console.error('Error fetching recipe detail:', error);
        });
    } else {
      console.error('Recipe name parameter not found.');
    }
  }
  
  

}
