from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Order(models.Model):
    correlative = models.CharField(max_length=255)
    visible = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, *args, **kwargs):
        number = Order.objects.all().count() + 1
        self.correlative = 'O-' + str(number).zfill(8)
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return self.correlative
