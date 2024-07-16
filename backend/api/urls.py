from django.urls import path # type: ignore
from . import views

# Define the URL patterns for the 'api' app
urlpatterns = [
    # URL for listing and creating comments
    path("comments/", views.CommentListCreate.as_view(), name="comment-list"),
    
    # URL for deleting a specific comment, identified by its primary key (pk)
    path("comments/delete/<int:pk>/", views.CommentDelete.as_view(), name="delete-comment"),

    # URL for updating a specific comment, identified by its primary key (pk)
    path("comments/update/<int:pk>/", views.CommentUpdate.as_view(), name="update-comment"),

    # URL for listing posts
    path('posts/', views.PostListCreate.as_view(), name='post-list'),

    # Get only comments of a specific post
    path('comments/post/<int:post_id>/', views.CommentListByPost.as_view(), name='comment-list-by-post'),


]
