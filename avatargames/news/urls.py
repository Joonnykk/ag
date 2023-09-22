from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:slug>/", views.show, name="show"),
    path("api/v1/", views.NewApiView.as_view()),
    # path("api/v1/<str:new_slug>", views.NewApiView.as_view())
]
