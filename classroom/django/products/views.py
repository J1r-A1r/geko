from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.models import CyberDeck
from products.serializers import CyberDeckSerializer

@api_view(['GET'])
def product_list(request):
    products = CyberDeck.objects.all()
    serializer = CyberDeckSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, pk):
    try:
        product = CyberDeck.objects.get(pk=pk)
    except CyberDeck.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CyberDeckSerializer(product)
    return Response(serializer.data)

@api_view(['POST'])
def product_create(request):
    serializer = CyberDeckSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def product_update(request, pk):
    try:
        product = CyberDeck.objects.get(pk=pk)
    except CyberDeck.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CyberDeckSerializer(product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
