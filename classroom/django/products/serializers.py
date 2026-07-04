from rest_framework import serializers
from .models import CyberDeck

class CyberDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = CyberDeck
        fields = '__all__'
