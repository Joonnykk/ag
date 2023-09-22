from django.shortcuts import render
from rest_framework import generics

from .models import *
from .serialazers import NewSerializer

# Create your views here.

# types = [
#     {"id": 1, "title": "Новости"},
#     {"id": 2, "title": "Статьи"},
#     {"id": 3, "title": "Видео"}
# ]
# categories = [
#     {"title": "Открытие арены", "slug": "opening-of-the-arena"},
#     {"title": "Бизнес", "slug": "business"},
#     {"title": "Оборудование", "slug": "equipment"},
#     {"title": "Софт", "slug": "software"},
#     {"title": "Конкурсы", "slug": "contests"},
#     {"title": "Полезные материалы", "slug": "useful-materials"},
#     {"title": "Мероприятия", "slug": "events"},
#     {"title": "Новые локации", "slug": "new-locations"},
#     {"title": "Всё о VR", "slug": "all-about-vr"}
# ]
articles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]


def index(request):
    types = Type.objects.all()
    categories = Category.objects.all()

    data = {
        'types': types,
        'categories': categories
    }

    return render(request, 'news/index.html', context=data)


def show(request, slug):

    return render(request, 'news/index.html')


class NewApiView(generics.ListAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer
