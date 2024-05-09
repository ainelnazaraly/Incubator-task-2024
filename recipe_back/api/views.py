from django.http import JsonResponse
from .models import Recipe, Category

# View function to get all recipes
def get_all_recipes(request):
    recipes = Recipe.objects.all()
    data = [recipe.to_json() for recipe in recipes]
    return JsonResponse(data, safe=False)

# View function to get recipes by name
def get_recipes_by_name(request, name):
    recipes = Recipe.objects.filter(name__icontains=name)
    data = [recipe.to_json() for recipe in recipes]
    return JsonResponse(data, safe=False)

# View function to get all categories
def get_all_categories(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)

# View function to get recipes by category
def get_recipes_by_category(request, category_id):
    recipes = Recipe.objects.filter(category_id=category_id)
    data = [recipe.to_json() for recipe in recipes]
    return JsonResponse(data, safe=False)

