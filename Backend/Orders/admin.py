from django.contrib import admin
from .models import Order, OrderContent


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('correlative', 'created_by', 'visible')
    exclude = ('correlative', )


@admin.register(OrderContent)
class OrderContent(admin.ModelAdmin):
    pass
