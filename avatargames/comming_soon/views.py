from django.shortcuts import render


# Create your views here.
def comming_soon(request):
    return render(request, 'comming_soon/index.html')
