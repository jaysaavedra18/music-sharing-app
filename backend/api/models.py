from django.db import models  # type: ignore
from django.contrib.auth.models import User  # type: ignore


class Post(models.Model):
    link = models.URLField()
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.link


#    Define the Comment model
#    id: "1",
#    body: "First comment",
#    username: "Jack",
#    userId: "1",
#    parentId: null,
#    createdAt: "2021-08-16T23:00:33.010+02:00",
#    postId: "spotify string"
class Comment(models.Model):

    # Content of the comment
    body = models.TextField()
    
    # Date Created automatically set upon creation
    createdAt = models.DateTimeField(auto_now_add=True)
    
    # ForeignKey relationship of Comment to the User model, setting on_delete 
    # to CASCADE ensures comments are deleted if the user is deleted
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")

    # Self-referential ForeignKey to allow nested comments
    parentId = models.IntegerField(null=True, blank=True)  # Use IntegerField instead of ForeignKey
    postId = models.IntegerField(null=True, blank=True)  # Use IntegerField instead of ForeignKey


    # String representation of the Comment model, returns the title
    def __str__(self):
        return self.body

    @property
    def is_reply(self):
        return self.parent is not None