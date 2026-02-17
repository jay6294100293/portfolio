from rest_framework import serializers

from portfolios.models import Certification


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = [
            'id', 'title', 'profile', 'certification_pic',
            'certificate_icon_pic', 'provider', 'date_completed',
            'certification_link', 'skills', 'status',
        ]
        read_only_fields = ['id']
