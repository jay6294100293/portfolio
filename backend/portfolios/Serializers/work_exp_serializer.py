from rest_framework import serializers

from portfolios.models import WorkExperience


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']
