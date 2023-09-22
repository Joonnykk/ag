from django.contrib import admin

# Register your models here.

from .models import New
from .models import Category
from .models import Type

admin.site.register(New)
admin.site.register(Category)
admin.site.register(Type)
