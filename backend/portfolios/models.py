from django.db import models


class Profile(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    name_preferred = models.CharField(max_length=100, blank=True, null=True)
    phone_num = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    email = models.EmailField()
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Skill(models.Model):
    name = models.CharField(max_length=100)
    skill_logo = models.ImageField(upload_to='skill_logo/', blank=True, null=True)
    Percentage = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    profile = models.ForeignKey(Profile, related_name='skills', on_delete=models.CASCADE)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.name


class Project(models.Model):
    PROJECT_TOPICS = (
        ('Machine Learning', 'Machine Learning'),
        ('Data Science', 'Data Science'),
        ('Data Analytics', 'Data Analytics'),
        ('Software Engineer', 'Software Engineer'),
        ('Others', 'Others'),
    )
    profile = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    project_link = models.URLField(blank=True, null=True)
    project_topic = models.CharField(max_length=50, choices=PROJECT_TOPICS, default='active')
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_pic = models.ImageField(upload_to='project_pics/', blank=True, null=True)
    tech_stack = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.title


class Certification(models.Model):
    title = models.CharField(max_length=200)
    profile = models.ForeignKey(Profile, related_name='certifications', on_delete=models.CASCADE)
    certification_pic = models.ImageField(upload_to='certification_pic/', blank=True, null=True)
    certificate_icon_pic = models.ImageField(upload_to='certificate_icon_pic/', blank=True, null=True)
    provider = models.CharField(max_length=200)
    date_completed = models.DateField()
    certification_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.title


class WorkExperience(models.Model):
    profile = models.ForeignKey(Profile, related_name='work_experiences', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    responsibilities = models.TextField()
    company_logo = models.ImageField(upload_to='company_logo/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.title


class Education(models.Model):
    profile = models.ForeignKey(Profile, related_name='educations', on_delete=models.CASCADE)
    degree = models.CharField(max_length=200)
    degree_city = models.CharField(max_length=200)
    university_logo = models.ImageField(upload_to='university_logo/', blank=True, null=True)
    degree_pic = models.ImageField(upload_to='degree_pic/', blank=True, null=True)
    institution = models.CharField(max_length=200)
    completion_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.degree
from django.db import models

# Create your models here.
