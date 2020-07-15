from django.urls import path
from Orders.views import OrderListApiView, OrderDetailApiView
from Products.views import ProductsListApiView

urlpatterns = [
    path('orders/', OrderListApiView.as_view()),
    path('orders/<pk>/', OrderDetailApiView.as_view()),
    path('products/', ProductsListApiView.as_view())
]
