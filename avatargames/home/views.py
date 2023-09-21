import json

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_POST

from .forms import OrderForm


# Create your views here.
def home(request):
    return render(request, 'home/index.html')


def offer(request, file_name):
    with open(f'./files/offer/{file_name}', 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=mypdf.pdf'
        return response


@require_POST
def order_franchise(request):
    form = json.loads(request.body)
    print(form["phone"])

    return JsonResponse({"Success": 'Check your email.'})


@require_POST
def validate_order_form(request):
    form = OrderForm(request.POST)
    if form.is_valid():
        print(form.cleaned_data)
    else:
        print(form)
    return JsonResponse({"success": 'true'})
