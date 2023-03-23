from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers

from .models import Chapter, Section

# Create your views here.


def index(request):
    return HttpResponse("Hello from the LearnNow index")


def all_chapters(request):
    return HttpResponse(serializers.serialize('json', Chapter.objects.all()))


def find_chapter(request, chapter_id: int):
    return HttpResponse(serializers.serialize('json', [Chapter.objects.get(pk=chapter_id)]))


def sections_by_chapter(request, chapter_id: int):
    return HttpResponse(serializers.serialize('json', Section.objects.filter(chapter=chapter_id)))
