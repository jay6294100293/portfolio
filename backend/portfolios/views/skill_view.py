from rest_framework import viewsets

from portfolios.Serializers.skill_serializer import SkillSerializer
from portfolios.models import Skill


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer