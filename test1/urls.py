from django.urls import path,include
from . import views
from .views import *

from rest_framework.routers import DefaultRouter

router=DefaultRouter()

router.register(r'items',ItemView)


urlpatterns=[

    path('',Home,name='home'),

    path('api/',include(router.urls)),
]