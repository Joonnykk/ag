from rest_framework import generics

from .models import *
from .serialazers import NewSerializer


class NewsApiView(generics.ListAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer

class NewApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer