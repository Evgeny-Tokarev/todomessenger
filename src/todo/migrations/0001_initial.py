# Generated by Django 3.2.6 on 2021-08-27 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('text', models.TextField(verbose_name='Текст')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('update_at', models.DateTimeField(auto_now=True, verbose_name='Дата обновления')),
                ('reminder_time', models.DateTimeField(verbose_name='Время напоминания')),
                ('is_send', models.BooleanField(default=False, verbose_name='Успешно отправлено')),
            ],
            options={
                'verbose_name': 'Лист задач',
            },
        ),
    ]
