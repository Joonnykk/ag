from django.urls import path

from . import views

urlpatterns = [
    path("franchise", views.index, name="index"),
]
