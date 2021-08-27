
 # Описание приложения

Запуск проекта.
 - ```docker-compose up --build ``` собрать приложение и сделать его первоначальный запуск
 - ```docker-compose down -v``` – остановить работу приложения
 - ```docker-compose run web python manage.py migrate``` – сделать необходимые миграции
 - ```docker-compose up``` – окончательно запустить приложение.

Стек технологий и требований к ним для реализации веб-приложения

- Python 3
- Django
- Описание API - Swagger OpenAPI Version 3

---
- Swagger достпупен по ссылке: ```http://localhost:8000/api/v1/swagger```
 -   ``` http://localhost:8000/api/v1/todo``` endpoint



 Совместный проект Александра и Евгения