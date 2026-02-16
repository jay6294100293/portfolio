from rest_framework import viewsets

from portfolios.Serializers.certification_Serializer import CertificationSerializer
from portfolios.models import Certification


class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer