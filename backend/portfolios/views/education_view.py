from rest_framework import viewsets

from portfolios.Serializers.education_serializer import EducationSerializer
from portfolios.models import Education


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer