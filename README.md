# NestJS test project with Accounts and Funds

## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone <URL-ВАШЕГО-РЕПОЗИТОРИЯ>
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd <ДИРЕКТОРИЯ-ПРОЕКТА>
    ```

3. Установите зависимости:

    ```bash
    npm install
    ```

4. Создайте базу даных

4. Создайте файл `.env` на основе `.env.example` и настройте параметры подключения к созданной базе данных.

5. Запустите приложение:

    ```bash
    npm run start:dev
    ```
    
# Запуск проекта

После запуска проекта будет доступна ссылка [/docs](http://localhost:3000/docs/)

# Миграция

Что бы записать первоначальные данные в базу данных используйте метод `parse-data`, после этого будут доступны два вида пользователей для авторизации

- Admin
    - email: `test@example.com`
    - password: `test`
- User
    - email: `test_user@example.com`
    - password: `test`

Отличия между пользователями в подкрепленных правах к каждому из них