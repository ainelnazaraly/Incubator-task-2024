import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}recipes/`);
  }

  getRecipeByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}recipes/${name}/`);
  }
}
