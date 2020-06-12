from django.urls import path
from .views import SignupView

urlpatterns = [
    path('new-account/', SignupView.as_view())
]