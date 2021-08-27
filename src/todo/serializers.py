from rest_framework import serializers

from src.todo.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'create_at', 'update_at', 'reminder_time', 'is_send')
