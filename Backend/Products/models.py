from django.db import models


class Product(models.Model):
    barcode = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    isReturnable = models.BooleanField(default=True)
    quantity = models.DecimalField(max_digits=6, decimal_places=0)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, *args, **kwargs):
        number = Product.objects.all().count() + 1
        self.barcode = 'P-' + str(number).zfill(8)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.description
