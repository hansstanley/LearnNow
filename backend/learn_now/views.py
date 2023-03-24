from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt

from .models import Chapter, Section

# Create your views here.


def index(request):
    return HttpResponse("Hello from the LearnNow index")


@csrf_exempt
def user_login(request):
    print(request.POST)
    username = request.POST['username']
    password = request.POST['password']
    print(username, password)
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponse()
    else:
        return HttpResponse(status=401)


def all_chapters(request):
    return HttpResponse(serializers.serialize('json', Chapter.objects.all()))


def find_chapter(request, chapter_id: int):
    return HttpResponse(serializers.serialize('json', [Chapter.objects.get(pk=chapter_id)]))


def sections_by_chapter(request, chapter_id: int):
    return HttpResponse(serializers.serialize('json', Section.objects.filter(chapter=chapter_id)))


def find_section(request, chapter_id: int, section_id: int):
    return HttpResponse(serializers.serialize('json', [Section.objects.filter(chapter=chapter_id).get(pk=section_id)]))
