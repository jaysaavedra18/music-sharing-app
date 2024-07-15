from django.contrib import admin  # type: ignore
from django.urls import path, include  # type: ignore
from api.views import CreateUserView, CurrentUserView, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  # type: ignore

urlpatterns = [
    # Admin site URL
    path('admin/', admin.site.urls),
    
    # URL for user registration
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    
    # URL to obtain JWT token pair (access and refresh tokens)
    path("api/token/", CustomTokenObtainPairView.as_view(), name="get_token"),
    
    # URL to refresh the JWT token
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    
    # URL for Django REST framework's built-in authentication views
    path("api-auth/", include("rest_framework.urls")),
    
    # Include the URLs from the 'api' app
    path("api/", include("api.urls")),

    path("accounts/profile/", CurrentUserView.as_view(), name="current-user")

    
]
