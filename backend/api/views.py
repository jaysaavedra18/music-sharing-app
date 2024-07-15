from django.shortcuts import render  # type: ignore
from django.contrib.auth.models import User  # type: ignore
from rest_framework import generics  # type: ignore
from .serializers import UserSerializer, CommentSerializer, CustomTokenObtainPairSerializer, PostSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny  # type: ignore
from rest_framework_simplejwt.views import TokenObtainPairView # type: ignore
from .models import Comment, Post

# Define a view for listing and creating comments
class CommentListCreate(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permissions_classes = [IsAuthenticated]

    # Define the queryset to use for retrieving comments
    def get_queryset(self):
        user = self.request.user  # Get current user
        # return Comment.objects.filter(author=user)  # Filter comments by the current user
        return Comment.objects.all()
    
    # Define the logic for saving a new comment
    def perform_create(self, serializer):
        print("performing_create")
        if serializer.is_valid():  # If the serializer data is valid, save the comment
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)  # Print any validation errors

# Define a view for listing comments by post
class CommentListByPost(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    # Define the queryset to filter comments by post
    def get_queryset(self):
        post_id = self.kwargs.get('post_id')  # Retrieve post_id from URL kwargs
        return Comment.objects.filter(postId=post_id)


# Define a view for deleting comments
class CommentDelete(generics.DestroyAPIView):
    serializer_class = CommentSerializer
    permissions_classes = [IsAuthenticated]

    # Define function to get all comments of self
    def get_queryset(self):
        user = self.request.user  # Get the currently authenticated user
        # print(user)
        return Comment.objects.filter(author=user)  # Filter comments by the current user 

# Define a view for updating a comment
class CommentUpdate(generics.UpdateAPIView):
    serializer_class = CommentSerializer  # Specify the serializer class to use
    permission_classes = [IsAuthenticated]  # Require authentication for access

    # Retrieve the comment to be updated
    def get_queryset(self):
        user = self.request.user
        return Comment.objects.filter(author=user)  # Fetch all comments

    # Update the comment's body
    def perform_update(self, serializer):
        serializer.save()  # Save the updated data using the serializer

# Define a view for creating new users
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()  # Use all User objects as the queryset
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow access to anyone (no authentication required)

class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permissions_classes = [AllowAny]
    
  # Define function to get all comments of self
    def get_queryset(self):
        user = self.request.user  # Get the currently authenticated user
        print(user)
        return user  # Filter comments by the current user 

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer