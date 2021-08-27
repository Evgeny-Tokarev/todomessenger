from django.db import models


class Todo(models.Model):
    """Лист задач"""
    title = models.CharField(
        'Заголовок',
        max_length=255
    )
    text = models.TextField('Текст')
    create_at = models.DateTimeField('Дата создания', auto_now_add=True)
    update_at = models.DateTimeField('Дата обновления', auto_now=True)
    reminder_time = models.DateTimeField('Время напоминания')
    is_send = models.BooleanField('Успешно отправлено', default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Лист задач'

