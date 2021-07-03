<p align="center" >
<img src="https://user-images.githubusercontent.com/57419630/124202511-df46f200-dab0-11eb-9ad7-b5f4ff1f0491.png" />
</p>

---
<h3 align="center">Next Level Week 06 of Rocketseat - Mission Node.js 🚀🚀🚀 </h3>

<p align="center">
<img alt="Next Level Week Ticket - Ricardo" title="Next Level Week Ticket - Ricardo" src="https://user-images.githubusercontent.com/57419630/123095225-3b03e200-d404-11eb-826b-1e913d923f51.png"/>
</p>

---

### **Status**: 🥂✨ Completed ✨🥂

<br>

### Keywords 🔑
- typescript -> ts
- javascript -> js

### Project Rules 📌
- Users Registration 
    - [x] It isn't allowed register more than one user with the same email address
    - [x] It isn't allowed register user without email address

- Tags Registration
    - [x] It isn't allowed register more than one tag with the same name
    - [x] It isn't allowed register user without name
    - [x] It isn't allowed register a tag for non admin user

- Compliment Registration
    - [x] It isn't allowed an user register a compliment for yourself
    - [x] It isn't allowed register a compliment for invalid users
    - [x] The user must be authenticated on the application

<br>

### Necessary Commands 
---

#### ⚠️Should you want to create this project from zero, run all of the commands below, if not, just run **npm install --global yarn** and **yarn install** instead⚠️

<br>


> npm install --global yarn

> yarn init -y

> yarn add typescript -D (instala o ts apenas em desenvolvimento)

> yarn tsc --init (inicializa o ts)

> yarn add express

> yarn add @types/express -D

> yarn add ts-node-dev -D (converte automaticamente ts para js)

> yarn add typeorm reflect-metadata sqlite3

> yarn typeorm migration:create -n CreateUsers

> yarn typeorm migration:run

> yarn typeorm entity:create -n User (do this after added in the **ormconfig.json** the code **"entitiesDir": "src/entity"** below)

```json
"cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entity"
}
```

> yarn add uuid

> yarn add @types/uuid -D

> yarn add express-async-errors

> yarn typeorm migration:create -n CreateTags

> yarn typeorm migration:run

> yarn typeorm entity:create -n Tag

> yarn add jsonwebtoken

> yarn add @types/jsonwebtoken -D

> yarn typeorm migration:create -n AlterUserAddColumnPassword

> yarn typeorm migration:run

>  yarn add bcryptjs

> yarn add @types/bcryptjs -D

> yarn typeorm migration:create -n CreateCompliments

> yarn typeorm migration:run

> yarn typeorm entity:create -n Compliment

> yarn add class-transformer (It is a library that allows you to customize entities.)

> yarn add cors (library needed when front-end makes API requests)

> yarn add @types/cors -D

<br>

#### Commands that were used to do the API documentation using Swagger

<br>

> yarn add swagger-ui-express

> yarn add @types/swagger-ui-express -D

<br>

### General Tips 💡
---

1) Useful commands:

> yarn tsc (converte ts para js)

> yarn dev (utilizado para rodar o projeto após a instalação do **ts-node-dev**)

<br>

2) Configurations below in package.json is used to transform the code js in code ts using te ts-node-dev in a automatic way.

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```

3) How to revert a migration:

> yarn typeorm migration:revert