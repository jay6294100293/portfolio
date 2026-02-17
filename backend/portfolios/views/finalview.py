from rest_framework import generics, permissions, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from portfolios.serializers.certification_serializer import CertificationSerializer
from portfolios.serializers.education_serializer import EducationSerializer
from portfolios.serializers.profile_serializer import ProfileSerializer
from portfolios.serializers.project_serializer import ProjectSerializer
from portfolios.serializers.skill_serializer import SkillSerializer, SkillGroupSerializer
from portfolios.serializers.work_exp_serializer import WorkExperienceSerializer
from portfolios.serializers.accomplishment_serializer import AccomplishmentSerializer
from portfolios.serializers.feedback_serializer import FeedbackSerializer
from portfolios.models import (
    Skill, Project, Certification, WorkExperience, Education,
    Profile, SkillGroup, Accomplishment, Feedback,
)


class ReadOnlyOrAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff


# --- Profile ---
class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.filter(status='active')
    serializer_class = ProfileSerializer
    permission_classes = [ReadOnlyOrAdmin]


class ProfileDetailAPIView(generics.RetrieveAPIView):
    queryset = Profile.objects.filter(status='active')
    serializer_class = ProfileSerializer
    permission_classes = [ReadOnlyOrAdmin]


# --- Skill ---
class SkillListAPIView(generics.ListAPIView):
    serializer_class = SkillSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = Skill.objects.filter(status='active')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


# --- Skill Groups (for frontend skills section) ---
class SkillGroupListAPIView(generics.ListAPIView):
    serializer_class = SkillGroupSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = SkillGroup.objects.filter(status='active').prefetch_related('names')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


# --- Project ---
class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = Project.objects.filter(status='active')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


class ProfileProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        return Project.objects.filter(
            profile_id=self.kwargs['profile_id'],
            status='active',
        )


# --- Certification ---
class CertificationListAPIView(generics.ListAPIView):
    serializer_class = CertificationSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = Certification.objects.filter(status='active')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


# --- Work Experience ---
class WorkExperienceListAPIView(generics.ListAPIView):
    serializer_class = WorkExperienceSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = WorkExperience.objects.filter(status='active')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


# --- Education ---
class EducationListAPIView(generics.ListAPIView):
    serializer_class = EducationSerializer
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        qs = Education.objects.filter(status='active')
        profile_id = self.request.query_params.get('profile_id')
        if profile_id:
            qs = qs.filter(profile_id=profile_id)
        return qs


# --- Accomplishment ---
class AccomplishmentDetailAPIView(generics.RetrieveAPIView):
    queryset = Accomplishment.objects.all()
    serializer_class = AccomplishmentSerializer
    permission_classes = [ReadOnlyOrAdmin]


# --- Feedback (public can POST, only admin can list) ---
class FeedbackCreateAPIView(generics.CreateAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        profile = get_object_or_404(Profile, pk=self.kwargs['profile_id'])
        serializer.save(profile=profile)


class FeedbackListAPIView(generics.ListAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        return Feedback.objects.filter(profile_id=self.kwargs['profile_id'])
