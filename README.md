# Incubator-task-2024
# Инструкция по запуску проекта

Этот проект состоит из фронтенда на Angular и бэкенда на Django.

## Запуск бэкенда (Django)

1. Убедитесь, что у вас установлен Python. Если нет, скачайте и установите Python с официального сайта: https://www.python.org/

2. Установите виртуальное окружение (virtualenv), чтобы изолировать зависимости проекта:

    ```bash
    pip install virtualenv
    ```

3. Создайте виртуальное окружение в корневой директории проекта:

    ```bash
    virtualenv env
    ```

4. Активируйте виртуальное окружение:

    - Для Windows:

        ```bash
        .\env\Scripts\activate
        ```

    - Для macOS и Linux:

        ```bash
        source env/bin/activate
        ```

5. Установите зависимости Django:

    ```bash
    pip install -r requirements.txt
    ```

6. Проведите миграции базы данных:

    ```bash
    python manage.py migrate
    ```

7. Запустите сервер Django:

    ```bash
    python manage.py runserver
    ```

Бэкенд будет доступен по адресу http://localhost:8000/.

## Запуск фронтенда (Angular)

1. Убедитесь, что у вас установлен Node.js и npm. Если нет, скачайте и установите Node.js с официального сайта: https://nodejs.org/

2. Установите Angular CLI глобально:

    ```bash
    npm install -g @angular/cli
    ```

3. Перейдите в директорию фронтенда:

    ```bash
    cd recipe-front
    ```

4. Установите зависимости фронтенда:

    ```bash
    npm install
    ```

5. Запустите сервер разработки Angular:

    ```bash
    ng serve
    ```

Фронтенд будет доступен по адресу http://localhost:4200/.

Теперь вы можете использовать проект! Удачи!
