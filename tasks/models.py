from django.db import models

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=64)
    priority = models.IntegerField()

    def __str__(self):
        return f"{self.id} {self.name} {self.priority}"
