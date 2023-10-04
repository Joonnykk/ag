from django.db import models

# Create your models here.
class Image(models.Model):
    alt = models.CharField(max_length=255, default='No alt')
    image = models.FileField(upload_to='media/news')

    def __str__(self):
        return self.alt