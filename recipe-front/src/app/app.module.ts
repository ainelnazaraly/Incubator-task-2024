import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    RecipeListComponent,
    MainPageComponent,
    RecipeDetailComponent,
    ErrorComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
