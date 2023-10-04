from django.urls import path

from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'image', views.ImageViewSet)
urlpatterns = router.urls
