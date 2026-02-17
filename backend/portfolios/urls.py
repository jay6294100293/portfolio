from django.urls import path

from portfolios.views.finalview import (
    ProfileListAPIView, ProfileDetailAPIView,
    SkillListAPIView, SkillGroupListAPIView,
    ProjectListAPIView, ProfileProjectListAPIView,
    CertificationListAPIView,
    WorkExperienceListAPIView,
    EducationListAPIView,
    AccomplishmentDetailAPIView,
    FeedbackCreateAPIView,
)

urlpatterns = [
    # Profiles
    path('profiles/', ProfileListAPIView.as_view(), name='profile-list'),
    path('profiles/<int:pk>/', ProfileDetailAPIView.as_view(), name='profile-detail'),

    # Profile-scoped nested endpoints (used by frontend)
    path('profiles/<int:profile_id>/projects/', ProfileProjectListAPIView.as_view(), name='profile-project-list'),
    path('profiles/<int:profile_id>/feedbacks/', FeedbackCreateAPIView.as_view(), name='profile-feedback-create'),

    # Flat list endpoints with ?profile_id= filtering
    path('skills/', SkillListAPIView.as_view(), name='skill-list'),
    path('skill-groups/', SkillGroupListAPIView.as_view(), name='skill-group-list'),
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('certifications/', CertificationListAPIView.as_view(), name='certification-list'),
    path('work-experiences/', WorkExperienceListAPIView.as_view(), name='workexperience-list'),
    path('educations/', EducationListAPIView.as_view(), name='education-list'),

    # Accomplishment (detail by pk)
    path('accomplishment/<int:pk>/', AccomplishmentDetailAPIView.as_view(), name='accomplishment-detail'),
]
