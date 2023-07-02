"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main.views import MyView, ItemListAPIView, CreateUserAPIView, CreateItemAPIView, CreateOrderAPIView, UserOrdersAPIView, UpdateOrderAPIView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/myendpoint/', MyView.as_view()),
    path('api/items/', ItemListAPIView.as_view(), name='item-list'),
    path('api/users/create/', CreateUserAPIView.as_view(), name='create_user'),
    path('api/items/create/', CreateItemAPIView.as_view(), name='create_item'),
    path('api/orders/create/', CreateOrderAPIView.as_view(), name='create_order'),
    path('api/orders/user/<int:user_id>/', UserOrdersAPIView.as_view(), name='user_orders'),
    path('api/orders/update/<int:id>/', UpdateOrderAPIView.as_view(), name='update_order'),
]
