from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

class MyView(APIView):
    def get(self, request):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)


# class MyView(APIView):
#     def get(self, request):
#         data = {
#             'message': 'Hello, this is your API response!'
#         }
#         return Response(data)
