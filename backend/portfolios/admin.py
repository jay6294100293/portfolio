# portfolio/admin.py

from django.contrib import admin
from .models import Skill, Project, Certification, WorkExperience, Education, Profile

admin.site.register(Profile)


# Define admin classes for each model
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name']


class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'tech_stack']


class CertificationAdmin(admin.ModelAdmin):
    list_display = ['title', 'provider', 'date_completed']


class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'start_date', 'end_date', 'responsibilities']


class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'completion_date']


# Register admin classes for each model
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Certification, CertificationAdmin)
admin.site.register(WorkExperience, WorkExperienceAdmin)
admin.site.register(Education, EducationAdmin)
