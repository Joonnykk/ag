from django.urls import path

from . import views

urlpatterns = [
    path("", views.comming_soon, name="comming_soon"),
]