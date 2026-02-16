# portfolio/views.py

from rest_framework import generics

from portfolios.Serializers.profile_serializer import ProfileSerializer
from portfolios.models import Profile


class ProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
