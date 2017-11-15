from django.conf.urls import url, include
from rest_framework import routers
from georef import views

from . import views

router = routers.DefaultRouter()
router.register(r'toponims', views.ToponimViewSet, base_name='toponims')

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api_internal/',include(router.urls)),
    url(r'^datatabletoponims/list$', views.toponims_datatable_list, name='toponims_datatable_list'),
    url(r'^toponims', views.toponims, name='toponims'),
]