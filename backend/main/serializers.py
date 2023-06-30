from rest_framework import serializers
from .models import User, Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'wallet_address']
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'write_only': True},
            'email': {'write_only': True},
            'wallet_address': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
