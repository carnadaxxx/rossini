from rest_framework import serializers
from .models import Order, OrderContent


class OrderContentSerializer(serializers.ModelSerializer):

    product = serializers.StringRelatedField(many=True)

    class Meta:
        model = OrderContent
        fields = ('id', 'product', 'quantity_ordered')


class OrdersSerializer(serializers.ModelSerializer):

    products = OrderContentSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ('correlative', 'products', 'single_delivery', 'created_by')
