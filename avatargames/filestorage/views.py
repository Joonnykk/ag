from rest_framework import viewsets
from rest_framework.exceptions import ParseError

from .models import Image
from .serialazers import ImageSerializer

class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
