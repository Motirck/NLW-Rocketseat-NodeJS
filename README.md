## Next Level Week 06 da Rocketseat - Nodejs
Next Level Week da Rocketseat - Nodejs

### Keywords
- typescript -> ts
- javascript -> js

### Project Rules
- Users Registration 
    - It isn't allowed register more than one user with the same email address
    - It isn't allowed register user without email address

- Tags Registration
    - It isn't allowed register more than one tag with the same name
    - It isn't allowed register user without name
    - It isn't allowed register a tag for non admin user

- Compliment Registration
    - It isn't allowed an user register a compliment for yourself
    - It isn't allowed register a compliment for invalid users
    - The user must be authenticated on the application

### Necessary Commands

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

> yarn typeorm entity:create -n User (do this after added in the **ormconfig.json** the code **"entitiesDir": "src/entity"** bellow)

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


### General Tips

1) Useful commands:

> yarn tsc (converte ts para js)

> yarn dev (utilizado para rodar o projeto após a instalação do **ts-node-dev**)

2) Configurations below in package.json is used to transform the code js in code ts using te ts-node-dev in a automatic way.

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```
3) How to revert a migration:
> yarn typeorm migration:revert