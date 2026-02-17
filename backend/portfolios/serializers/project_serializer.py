from rest_framework import serializers

from portfolios.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'id', 'profile', 'project_link', 'github_link', 'project_topic',
            'title', 'description', 'short_description', 'project_pic',
            'tech_stack', 'status',
        ]
        read_only_fields = ['id']
