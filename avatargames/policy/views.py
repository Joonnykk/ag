from django.shortcuts import render


# Create your views here.
def policy(request):
    return render(request, 'policy/index.html')
