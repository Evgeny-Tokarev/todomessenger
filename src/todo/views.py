from rest_framework.viewsets import ModelViewSet

from src.todo.models import Todo
from src.todo.serializers import TodoSerializer


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer