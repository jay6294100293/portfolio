from rest_framework import serializers

from portfolios.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'id', 'first_name', 'last_name', 'job_title',
            'profile_pic', 'email', 'linkedin', 'github',
            'about_me', 'about_me_intro',
        ]
        read_only_fields = ['id']
