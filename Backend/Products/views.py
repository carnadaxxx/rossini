from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import render
from .serializers import ProductSerializer
from .models import Product


class ProductsListApiView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = None
