from django.db import models

class Category (models.Model): 
    name = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Categories"
    image_url = models.CharField(max_length=1000)
    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'name': self.name, 
            'image_url': self.image_url
        }


class Recipe(models.Model): 
    name= models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Recipes"
    description = models.TextField()
    author = models.CharField(max_length=100)
    image_url = models.CharField(max_length=1000)
    categor = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="recipies")
    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'author': self.author,
            'image_url': self.image_url,
        }
