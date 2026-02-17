from rest_framework import serializers

from portfolios.models import Skill, SkillGroup, SkillItem


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'skill_logo', 'percentage', 'profile', 'status']
        read_only_fields = ['id']


class SkillItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillItem
        fields = ['id', 'name', 'level']
        read_only_fields = ['id']


class SkillGroupSerializer(serializers.ModelSerializer):
    names = SkillItemSerializer(many=True, read_only=True)

    class Meta:
        model = SkillGroup
        fields = ['id', 'name', 'profile', 'names', 'status']
        read_only_fields = ['id']
