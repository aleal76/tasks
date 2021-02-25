from django import forms
from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from tasks.models import Task
from tasks.forms import TaskForm

# Create your views here.
def index(request):
    return render(request, "tasks/index.html", {
        "tasks": Task.objects.all() 
    })


def add(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, "tasks/add.html", {
                "form": form
            })
    return render(request, "tasks/add.html", {
        "form": TaskForm()
})

def edit(request, id):  
    task = Task.objects.get(id=id)  
    return render(request,'tasks/edit.html', {'task':task})  

def delete(request, id):  
    Task.objects.filter(id=id).delete()
    Task.objects.all()
    return HttpResponseRedirect(reverse("tasks:index"))

def update(request, id):  
    task = Task.objects.get(id=id)
    print(task,"en update task")
    if request.method == "POST":
        form = TaskForm(request.POST)
        print(form, "modified")
        task.name = form.cleaned_data["name"]
        task.priority = form.cleaned_data["priority"]
        print(task,"after")
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, "tasks/edit.html", {
                "form": form
            })
    return render(request, "tasks/edit.html", {
        "form": TaskForm()
    })
