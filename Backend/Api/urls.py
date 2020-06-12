from django.urls import path
from Orders.views import OrderListApiView, OrderDetailApiView


urlpatterns = [
    path('orders/', OrderListApiView.as_view()),
    path('orders/<pk>/', OrderDetailApiView.as_view())
]
