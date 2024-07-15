from django.contrib import admin

from .models import Comment, Post

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'body', 'author', 'parentId', 'createdAt')
    search_fields = ('body', 'author__username')
    list_filter = ('createdAt', 'author')

@admin.register(Post)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'createdAt', 'link')
