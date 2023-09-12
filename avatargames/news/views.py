from django.shortcuts import render

# Create your views here.

types = [
    {"id": 1, "title": "Новости"},
    {"id": 2, "title": "Статьи"},
    {"id": 3, "title": "Видео"}
]
categories = [
    {"title": "Открытие арены", "slug": "opening-of-the-arena"},
    {"title": "Бизнес", "slug": "business"},
    {"title": "Оборудование", "slug": "equipment"},
    {"title": "Софт", "slug": "software"},
    {"title": "Конкурсы", "slug": "contests"},
    {"title": "Полезные материалы", "slug": "useful-materials"},
    {"title": "Мероприятия", "slug": "events"},
    {"title": "Новые локации", "slug": "new-locations"},
    {"title": "Всё о VR", "slug": "all-about-vr"}
]
articles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]


def news(request):
    filters = request.GET.getlist('ignore')

    data = {
        'types': types,
        'categories': categories,
        'articles': articles,
        'filters': filters
    }

    return render(request, 'news/index.html', context=data)


def category(request, category_slug):
    filters = request.GET.getlist('ignore')

    data = {
        'types': types,
        'categories': categories,
        'articles': articles,
        'filters': filters
    }

    return render(request, 'news/index.html', context=data)
