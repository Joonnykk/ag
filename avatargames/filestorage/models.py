from django.db import models

# Create your models here.
class SingleImage(models.model):
    src = models.ImageField(upload_to='store')

    def __str__(self):
        return self.title