from rest_framework import serializers

from portfolios.models import WorkExperience


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = [
            'id', 'profile', 'title', 'company', 'start_date',
            'end_date', 'responsibilities', 'company_logo', 'status',
        ]
        read_only_fields = ['id']
