from django.db import models
from django.contrib.auth import get_user_model
from Products.models import Product

User = get_user_model()


class OrderContent(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity_ordered = models.DecimalField(max_digits=5, decimal_places=0)
    quantity_delivery = models.DecimalField(max_digits=5, decimal_places=0)
    quantity_returned = models.DecimalField(max_digits=5, decimal_places=0, default=0)


class Order(models.Model):
    correlative = models.CharField(max_length=255)
    single_delivery = models.BooleanField(default=True)
    completed = models.BooleanField(default=False)
    visible = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    products = models.ManyToManyField(
        OrderContent,
    )

    class Meta:
        ordering = ['-created_at']

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, *args, **kwargs):
        if self.single_delivery:
            single_code = 'P'
        else:
            single_code = 'C'

        number = Order.objects.all().count() + 1
        self.correlative = 'O-' + single_code + '-' + str(number).zfill(8)
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return self.correlative
