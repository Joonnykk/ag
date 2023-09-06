from django.shortcuts import render


# Create your views here.
def franchise(request):
    return render(request, 'franchise/index.html')
