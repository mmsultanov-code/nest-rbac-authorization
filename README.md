# NestJS RBAC Authorization Project

## Описание

Этот проект представляет собой приложение на NestJS с использованием Sequelize, реализующее авторизацию на основе ролей и прав доступа (RBAC). Проект включает несколько модулей:

- **permissions**: Хранит права, привязанные к ролям.
- **roles**: Хранит роли, привязанные к пользователям.
- **users**: Управляет пользователями.
- **auth**: Обрабатывает регистрацию и авторизацию.

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

4. Создайте файл `.env` на основе `.env.example` и настройте параметры подключения к базе данных.

5. Выполните миграции для создания таблиц в базе данных:

    ```bash
    npx sequelize-cli db:migrate
    ```

6. Запустите приложение:

    ```bash
    npm run start
    ```

## API

### Методы

| Метод     | URL                          | Описание                      | Тело запроса                                                                                           |
|-----------|------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------|
| POST       | /users/                      | Создать пользователя           | ```json\n{ "first_name": "first_name",\n    "last_name": "last_name",\n    "email": "test@example.com",\n    "password": "test_password"\n}``` |
| POST       | /auth/register/              | Регистрация пользователя       | ```json\n{ "first_name": "first_name",\n    "last_name": "last_name",\n    "email": "test@example.com",\n    "password": "test_password"\n}``` |
| POST       | /auth/login                  | Авторизация пользователя       | ```json\n{ "email": "test@example.com",\n    "password": "test_password"\n}``` |
| PATCH      | /users/1                     | Обновить пользователя по ID    | ```json\n{ "first_name": "first_name",\n    "last_name": "last_name",\n    "email": "test@example.com"\n}``` |
| DELETE     | /users/1                     | Удалить пользователя по ID     | ```json\n{ "first_name": "first_name",\n    "last_name": "last_name",\n    "email": "test@example.com"\n}``` |
| GET        | /users/                      | Получить всех пользователей    | Нет тела запроса                                                                                      |
| GET        | /users/1                     | Получить пользователя по ID    | Нет тела запроса                                                                                      |

## Примеры запросов

### Создать пользователя

```http
POST /users/
Content-Type: application/json

{
    "first_name": "first_name",
    "last_name": "last_name",
    "email": "test@example.com",
    "password": "test_password"
}
```

### Регистрация
```http
POST /auth/register/
Content-Type: application/json

{
    "first_name": "first_name",
    "last_name": "last_name",
    "email": "test@example.com",
    "password": "test_password"
}
```

### Авторизация
```http
POST /auth/login
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "test_password"
}
```

### Обновить пользователя

```http
PATCH /users/1
Content-Type: application/json

{
    "first_name": "first_name",
    "last_name": "last_name",
    "email": "test@example.com"
}
```
### Удалить пользователя

```http
DELETE /users/1
Content-Type: application/json

{
    "first_name": "first_name",
    "last_name": "last_name",
    "email": "test@example.com"
}
```
### Получить всех пользователей

`GET /users/`

### Получить пользователя по ID

`GET /users/1`
