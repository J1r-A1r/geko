from django.db import models

class CyberDeck(models.Model):
    net_alias = models.CharField(max_length=120, verbose_name="Net Alias")
    firmware_hash = models.CharField(max_length=64, unique=True, verbose_name="Firmware Hash")
    glitch_log = models.TextField(blank=True, verbose_name="Glitch Log")
    neon_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Neon Price")
    ram_nodes = models.PositiveIntegerField(default=16, verbose_name="RAM Nodes")
    ice_breaker_level = models.IntegerField(default=1, verbose_name="ICE Breaker Level")
    is_encrypted = models.BooleanField(default=True, verbose_name="Is Encrypted")
    breach_timestamp = models.DateTimeField(auto_now_add=True, verbose_name="Breach Timestamp")

    class Meta:
        verbose_name = "Cyber Deck"
        verbose_name_plural = "Cyber Decks"
        ordering = ['-breach_timestamp']

    def __str__(self):
        return f"{self.net_alias} [HASH: {self.firmware_hash[:8]}]"