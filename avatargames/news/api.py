from django.urls import path

from . import views_api

urlpatterns = [
    path('', views_api.NewsApiView.as_view()),
    path('<int:pk>/', views_api.NewApiView.as_view())
]
