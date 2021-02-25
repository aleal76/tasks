from django.urls import path

from . import views
app_name='tasks' #to avoid name issues between apps
urlpatterns =  [
    path("", views.index, name="index"),
    path("add/", views.add, name="add"),
    path("edit/<int:id>", views.edit, name="edit"),
    path("delete/<int:id>", views.delete, name="delete"),
    path("update/<int:id>", views.update, name="update")
]

