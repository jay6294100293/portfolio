# portfolio/urls.py

from django.urls import path

from portfolios.views.finalview import (SkillListCreateAPIView, SkillRetrieveUpdateDestroyAPIView,
                    ProjectListCreateAPIView, ProjectRetrieveUpdateDestroyAPIView,
                    CertificationListCreateAPIView, CertificationRetrieveUpdateDestroyAPIView,
                    WorkExperienceListCreateAPIView, WorkExperienceRetrieveUpdateDestroyAPIView,
                    EducationListCreateAPIView, EducationRetrieveUpdateDestroyAPIView,
                    ProfileListCreateAPIView, ProfileRetrieveUpdateDestroyAPIView)

urlpatterns = [
    path('skills/', SkillListCreateAPIView.as_view(), name='skill-list-create'),
    path('skills/<int:pk>/', SkillRetrieveUpdateDestroyAPIView.as_view(), name='skill-detail'),

    path('projects/', ProjectListCreateAPIView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectRetrieveUpdateDestroyAPIView.as_view(), name='project-detail'),

    path('certifications/', CertificationListCreateAPIView.as_view(), name='certification-list-create'),
    path('certifications/<int:pk>/', CertificationRetrieveUpdateDestroyAPIView.as_view(), name='certification-detail'),

    path('work-experiences/', WorkExperienceListCreateAPIView.as_view(), name='workexperience-list-create'),
    path('work-experiences/<int:pk>/', WorkExperienceRetrieveUpdateDestroyAPIView.as_view(), name='workexperience-detail'),

    path('educations/', EducationListCreateAPIView.as_view(), name='education-list-create'),
    path('educations/<int:pk>/', EducationRetrieveUpdateDestroyAPIView.as_view(), name='education-detail'),

    # path('about-me/', AboutMeListCreateAPIView.as_view(), name='aboutme-list-create'),
    # path('about-me/<int:pk>/', AboutMeRetrieveUpdateDestroyAPIView.as_view(), name='aboutme-detail'),

    path('profiles/', ProfileListCreateAPIView.as_view(), name='profile-list-create'),
    path('profiles/<int:pk>/', ProfileRetrieveUpdateDestroyAPIView.as_view(), name='profile-detail'),
]
