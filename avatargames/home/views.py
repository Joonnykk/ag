from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, 'home/index.html')


def offer(request, file_name):
    with open(f'./files/{file_name}', 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=mypdf.pdf'
        return response
