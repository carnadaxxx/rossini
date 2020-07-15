from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Order
from .serializers import OrdersSerializer


class OrderListApiView(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer
    pagination_class = None


class OrderDetailApiView(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer
