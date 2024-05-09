from django.contrib import admin
from .models import Category, Recipe
# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin): 
    list_display=(
        'name',
        'image_url'
    )

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin): 
    list_display=(
        'name', 
        'description', 
        'author', 
        'image_url'
    )