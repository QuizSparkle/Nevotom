from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

class MyView(APIView):
    def get(self, request):
        data = {
            'message': 'Hello, this is your API response!'
        }
        return Response(data)
