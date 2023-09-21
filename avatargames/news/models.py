from django.db import models


# Create your models here.
class New(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    content = models.TextField(blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    is_published = models.BooleanField(default=False)
    category_id = models.ForeignKey('Category', on_delete=models.PROTECT, null=False)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
