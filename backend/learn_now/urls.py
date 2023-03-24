from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.user_login, name='user_login'),
    path('register/', views.user_register, name='user_register'),
    path('chapters/', views.all_chapters, name='chapters'),
    path('chapters/<int:chapter_id>/', views.find_chapter, name='one_chapter'),
    path('chapters/<int:chapter_id>/sections/',
         views.sections_by_chapter, name='sections_by_chapter'),
    path('chapters/<int:chapter_id>/sections/<int:section_id>/',
         views.find_section, name='one_section')
]
