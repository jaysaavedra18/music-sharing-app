# Generated by Django 5.0.7 on 2024-07-14 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_comment_parent_comment_parentid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='created_at',
            new_name='createdAt',
        ),
        migrations.AddField(
            model_name='comment',
            name='postId',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
