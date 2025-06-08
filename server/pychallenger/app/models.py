from django.db import models 
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


# Custom User Model
class MyUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    # objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["date_of_birth"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin












# class Topic(models.Model):
#     name = models.CharField(max_length=100, unique=True)
#     desc = models.TextField(blank=True, null=True, db_column='description')

#     def __str__(self):
#         return self.name


# class Subtopic(models.Model):
#     topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name="subtopics")
#     name = models.CharField(max_length=100, unique=True)
#     desc = models.TextField(blank=True, null=True, db_column='description')

#     def __str__(self):
#         return self.name
