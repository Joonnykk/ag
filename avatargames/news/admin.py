from django.contrib import admin

# Register your models here.

from .models import New
from .models import Category

admin.site.register(New)
admin.site.register(Category)
