## Next Level Week 06 da Rocketseat - Nodejs
Next Level Week da Rocketseat - Nodejs

### Palavras-chave
- typescript -> ts
- javascript -> js

### Comandos necessários

> yarn init -y

> yarn add typescript -D (instala o ts apenas em desenvolvimento)

> yarn tsc --init (inicializa o ts)

> yarn add express

> yarn add @types/express -D

> yarn add ts-node-dev -D (converte automaticamente ts para js)

> yarn add typeorm reflect-metadata sqlite3

### Dicas gerais

1) Comandos úteis:

> yarn tsc (converte ts para js)

> yarn dev (utilizado para rodar o projeto após a instalação do **ts-node-dev**)

2) Configurações package.json para fazer com que o ts-node-dev instalado anteriormente transforme o código ts para js de forma automática

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```
3) 