from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
 
 
 
class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()   
    serializer_class = ItemSerializer  
 
def Home(request):
    return render(request, 'home.html')   

