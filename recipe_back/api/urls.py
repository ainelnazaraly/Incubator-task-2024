from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.get_all_recipes, name='get_all_recipes'),
    path('recipes/<str:name>/', views.get_recipes_by_name, name='get_recipes_by_name'),
    path('categories/', views.get_all_categories, name='get_all_categories'),
    path('categories/<int:category_id>/', views.get_recipes_by_category, name='get_recipes_by_category'),
]
