from rest_framework import viewsets

from portfolios.Serializers.project_serializer import ProjectSerializer
from portfolios.models import Project


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer