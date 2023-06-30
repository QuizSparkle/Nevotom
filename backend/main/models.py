from django.db import models

# Create your models here.
class User(models.Model):
    FULL_NAME_MAX_LENGTH = 100
    USERNAME_MAX_LENGTH = 50
    EMAIL_MAX_LENGTH = 254
    COUNTRY_MAX_LENGTH = 50
    ADDRESS_MAX_LENGTH = 200

    full_name = models.CharField(max_length=FULL_NAME_MAX_LENGTH, default="Full name")
    email = models.EmailField(max_length=EMAIL_MAX_LENGTH, unique=True)
    username = models.CharField(max_length=USERNAME_MAX_LENGTH, unique=True)
    country = models.CharField(max_length=COUNTRY_MAX_LENGTH, default="Country")
    address = models.CharField(max_length=ADDRESS_MAX_LENGTH, default="Address")

    wallet_address = models.CharField(max_length=100)  # Assuming wallet address is a string

    def __str__(self):
        return self.username
        
class Item(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='item_images')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    posting_fee = models.DecimalField(max_digits=10, decimal_places=2)

    @property
    def total_posting_fee(self):
        return self.posting_fee * self.quantity

    def __str__(self):
        return self.name
