# portfolio/serializers.py

from rest_framework import serializers

from portfolios.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
