from django.contrib import admin
from .models import CyberDeck

@admin.register(CyberDeck)
class CyberDeckAdmin(admin.ModelAdmin):
    list_display = ('net_alias', 'firmware_hash', 'neon_price', 'is_encrypted')