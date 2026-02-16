from rest_framework import serializers

from portfolios.models import Education


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']
