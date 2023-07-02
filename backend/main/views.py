from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Item, Order
from .serializers import UserSerializer, ItemSerializer, OrderSerializer
from ..events import fetch_event


class MyView(APIView):
    def get(self, request):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)


class ItemListAPIView(APIView):
    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class CreateUserAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"})
        return Response(serializer.errors, status=400)


class CreateItemAPIView(APIView):
    def post(self, request):
        # Fetch the event details using the provided parameters
        contract_name = request.data.get("contract_name")
        chain_id = request.data.get("chain_id")
        transaction_hash = request.data.get("transaction_hash")
        event_name = request.data.get("event_name")

        # Call fetch_event function
        data = fetch_event(contract_name, chain_id, transaction_hash, event_name)
        if data:
            # Create the Item object based on the fetched event data
            item_data = {
                "seller_address": data["itemId"],
                "itemId": data[
                    "itemId"
                ],  # This assumes that your Item model has a field called 'itemId'
                "name": data["name"],
                "image": data["image"],
                "description": data["description"],
                "price": data["price"],
                "quantity": data["quantity"],
                "postingFee": data["postingFee"],
                # ... Include other fields as necessary
            }

            # Use the serializer to validate and save the item data
            item_serializer = ItemSerializer(data=item_data)
            if item_serializer.is_valid():
                item_serializer.save()
                return Response({"message": "Item created successfully"})
            else:
                # Handle serializer errors
                return Response(item_serializer.errors, status=400)
        else:
            return Response({"message": "Failed to fetch event data"}, status=400)


class CreateOrderAPIView(APIView):
    def post(self, request):
        contract_name = request.data.get("contract_name")
        chain_id = request.data.get("chain_id")
        transaction_hash = request.data.get("transaction_hash")
        event_name = request.data.get("event_name")
        item_id = request.data.get("item_id")

        # Fetch the event details and other necessary data using the provided parameters
        # ...
        data = fetch_event(contract_name, chain_id, transaction_hash, event_name)
        if data:
            # Lookup the item based on the given item_id
            try:
                item = Item.objects.get(id=data["itemId"])
            except Item.DoesNotExist:
                # Handle case where item with the given item_id does not exist
                return Response({"message": "Item Not Found"})

            # Create the Order object based on the fetched event data and item connection
            order_data = {
                "user": data["name"],  # User data from the fetched event
                "item": item,  # Connect the item object to the order
                "quantity": data["quantity"],  # Quantity from the fetched event
                "status": "pending",  # Provide the initial status
            }

            order_serializer = OrderSerializer(data=order_data)
            if order_serializer.is_valid():
                order = order_serializer.save()
                return order
            else:
                # Handle serializer errors
                return Response({"message": "Wrong arguments"})

            serializer = OrderSerializer()
            if serializer.is_valid():
                order = serializer.save()  # Save the order to the database

                # Decrease the quantity of the listing
                order.listing = listing
                listing.quantity -= order.quantity
                listing.save()

            return Response({"message": "Order created successfully"})
        return Response(serializer.errors, status=400)


class UserOrdersAPIView(APIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        user_id = self.kwargs["user_id"]
        return Order.objects.filter(user_id=user_id)


class UpdateOrderAPIView(APIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = "id"


class CancelOrderAPIView(APIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = "id"

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.cancellation_requested = True
        instance.status = "cancelled"
        instance.save()
        return self.partial_update(request, *args, **kwargs)
