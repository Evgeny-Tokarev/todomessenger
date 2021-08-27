from django.urls import path

from src.todo.views import TodoCreateAPIView, TodoListAPIView

urlpatterns = [
    path('create/', TodoCreateAPIView.as_view(), name='create_todo'),
    path('', TodoListAPIView.as_view(), name='list_view')
]
