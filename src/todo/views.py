from rest_framework.generics import CreateAPIView, ListAPIView

from src.todo.models import Todo
from src.todo.serializers import TodoSerializer


class TodoCreateAPIView(CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoListAPIView(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


