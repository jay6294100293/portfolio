from rest_framework import serializers

from portfolios.models import Education


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = [
            'id', 'profile', 'degree', 'degree_city', 'university_logo',
            'degree_pic', 'institution', 'completion_date', 'status',
        ]
        read_only_fields = ['id']
