from django.contrib.auth.models import User  # type: ignore
from rest_framework import serializers  # type: ignore
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # type: ignore
from .models import Comment, Post

# Define a serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]  # Fields to include in the serialized data
        # Accept password when creating a new user but do not return it when reading user data
        extra_kwargs = {"password": {"write_only": True}}

    # Override the create method to handle user creation ourselves
    def create(self, validated_data):
        print(validated_data)  # Print the validated data (for debugging purposes)
        # Use the create_user method to handle password hashing and user creation
        user = User.objects.create_user(**validated_data)
        return user

# Define a serializer for the Comment model
class CommentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='author.username', read_only=True)
    userId = serializers.IntegerField(source='author.id', read_only=True)
    parentId = serializers.IntegerField(required=False, allow_null=True)
    postId = serializers.IntegerField(required=False, allow_null=True)

    class Meta:
        model = Comment
        fields = ["id", "body", "createdAt", "username", "userId", "parentId", "author", "postId"]
        # Make the author field read-only, as it should not be set directly by clients
        extra_kwargs = {"author": {"read_only": True},
                        # "parent": {"required": False, "allow_null": True},
                        }

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add custom response data here
        data.update({
            'user': {
                'id': self.user.id,
                'username': self.user.username,
                # Add more user fields if needed
            }
        })

        return data

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'link', 'createdAt']