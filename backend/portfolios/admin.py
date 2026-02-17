from django.contrib import admin
from .models import (
    Skill, SkillGroup, SkillItem, Project, Certification,
    WorkExperience, Education, Profile, Accomplishment, Feedback,
)


class SkillItemInline(admin.TabularInline):
    model = SkillItem
    extra = 1


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'job_title', 'email', 'status']
    list_filter = ['status']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'percentage', 'profile', 'status']
    list_filter = ['status', 'profile']


@admin.register(SkillGroup)
class SkillGroupAdmin(admin.ModelAdmin):
    list_display = ['name', 'profile', 'status']
    list_filter = ['status', 'profile']
    inlines = [SkillItemInline]


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'project_topic', 'tech_stack', 'profile', 'status']
    list_filter = ['status', 'project_topic', 'profile']


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['title', 'provider', 'date_completed', 'profile', 'status']
    list_filter = ['status', 'profile']


@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'start_date', 'end_date', 'profile', 'status']
    list_filter = ['status', 'profile']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'completion_date', 'profile', 'status']
    list_filter = ['status', 'profile']


@admin.register(Accomplishment)
class AccomplishmentAdmin(admin.ModelAdmin):
    list_display = ['profile', 'years_experience', 'months_experience', 'projects_completed']


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'profile', 'created_at']
    list_filter = ['profile']
    readonly_fields = ['created_at']
