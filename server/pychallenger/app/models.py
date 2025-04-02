from django.db import models
from django.contrib.auth.models import User 



class Topic(models.Model):
    name = models.CharField(max_length=100, unique=True)
    desc = models.TextField(blank=True, null=True, db_column='description')

    def __str__(self):
        return self.name


class Subtopic(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name="subtopics")
    name = models.CharField(max_length=100, unique=True)
    desc = models.TextField(blank=True, null=True, db_column='description')

    def __str__(self):
        return self.name
