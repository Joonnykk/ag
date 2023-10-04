"""
URL configuration for avatargames project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import to include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('ckeditor5/', include('django_ckeditor_5.urls')),
    path('djadmin/', admin.site.urls),

    path("", include("home.urls")),
    path('agadmin/', include('agadmin.urls')),
    path("franchise/", include("franchise.urls")),
    path("questions/", include("questions.urls")),
    path("policy/", include("policy.urls")),
    path("about/", include("about.urls")),
    path("news/", include("news.urls")),
    path("comming_soon/", include("comming_soon.urls")),
    path("ckeditor5/", include('django_ckeditor_5.urls'), name="ck_editor_5_upload_file"),
    # api
    path('api/v1/news/', include("news.api")),
    path("api/v1/uploads/", include("filestorage.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
