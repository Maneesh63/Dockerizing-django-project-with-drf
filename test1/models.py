from django.db import models

# Create your models here.
class Item(models.Model):

    title=models.CharField(max_length=344)

    description=models.TextField()

    date=models.DateTimeField(auto_now_add=True)


    