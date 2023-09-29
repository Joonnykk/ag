from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify
from django_ckeditor_5.fields import CKEditor5Field


# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)


class Type(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)

    def __str__(self):
        return self.title


class New(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    description = CKEditor5Field(max_length=500, verbose_name='Краткое описание', config_name='extends')
    content = CKEditor5Field('Полное описание', config_name='extends')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    is_published = models.BooleanField(default=False)
    category_id = models.ForeignKey('Category', on_delete=models.PROTECT, blank=False)
    type_id = models.ForeignKey('Type', on_delete=models.PROTECT, blank=False)

    def __str__(self):
        return self.title

