from rest_framework import serializers

from portfolios.models import Accomplishment


class AccomplishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accomplishment
        fields = [
            'id', 'profile', 'years_experience', 'months_experience',
            'projects_completed',
        ]
        read_only_fields = ['id']
