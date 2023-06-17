from django.db import models

# Create your models here.
class User(models.Model):
    FULL_NAME_MAX_LENGTH = 100
    USERNAME_MAX_LENGTH = 50
    EMAIL_MAX_LENGTH = 254
    COUNTRY_MAX_LENGTH = 50
    ADDRESS_MAX_LENGTH = 200

    full_name = models.CharField(max_length=FULL_NAME_MAX_LENGTH)
    email = models.EmailField(max_length=EMAIL_MAX_LENGTH, unique=True)
    username = models.CharField(max_length=USERNAME_MAX_LENGTH, unique=True)
    country = models.CharField(max_length=COUNTRY_MAX_LENGTH)
    address = models.CharField(max_length=ADDRESS_MAX_LENGTH)
    wallet_address = models.CharField(max_length=100)  # Assuming wallet address is a string

    def __str__(self):
        return self.username
