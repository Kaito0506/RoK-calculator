## App

- Install npm packages:

```sh
npm install
```

- Run app:

```sh
npm run dev
```

## Server
- Install npm packages:

```bash
npm install
```

- Setup .env file:

```bash
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

- Database migration:

1. Create tables

```bash
npx knex migrate:latest
```

2. Drop tables

```bash
npx knex migrate:rollback
```

If running into 'Client does not support authentication protocol' run this command on MySQL

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
```

- Run server:

```bash
npm start
```

## Contributing
This project would not be possible without the help from:
- [Hồ Minh Nhựt](https://github.com/Kaito0506) - Team Leader, Developer.
- [Lê Minh Mẫn](https://github.com/LeMinhMan2809) - Member, Designer.
- [La Thanh Trọng](https://github.com/LaThanhTrong) - Member, Developer.