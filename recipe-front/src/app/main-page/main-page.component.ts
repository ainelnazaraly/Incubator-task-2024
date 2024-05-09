import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
interface Recipe {
  name: string;
  imageUrl: string;
}

interface Category {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  recipes: Recipe[] = [
    { name: 'Burger: Classic beef patty, melted cheese, fresh veggies, all in a toasted bun.', imageUrl: '/assets/burger.jpg' },
    { name: 'Cake: Fluffy layers, creamy frosting, sweet drizzle, pure delight.', imageUrl: '/assets/cake.jpg' },
    { name: 'Lasagna: Pasta, sauce, cheese, repeat. Baked to perfection.', imageUrl: '/assets/images-7.jpeg' },
    { name: 'Scramble: Eggs, veggies, cheese, breakfast magic.', imageUrl: '/assets/scramble.jpg' },
    { name: 'Steak: Juicy, seasoned, grilled goodness.', imageUrl: '/assets/steak.jpeg' },
  ];

    categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }
}
