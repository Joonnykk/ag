from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("offer/<str:file_name>", views.offer, name="offer"),
]
