
from rest_framework import viewsets

from portfolios.Serializers.work_exp_serializer import WorkExperienceSerializer
from portfolios.models import WorkExperience


class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer