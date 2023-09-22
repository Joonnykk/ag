from rest_framework import serializers
from .models import New


class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = (
            'title',
            'description',
            'content',
            'created_at',
            'category_id',
            'type_id',
        )
