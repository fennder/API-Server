## Configurar um ambiente para Node + MongoDB

## Abrir conta na Atlas
# Serviço de cloud para banco de dados


<a href="https://www.mongodb.com/products/platform/atlas-database">https://www.mongodb.com/products/platform/atlas-database</a>


## Abrir sua pasta e desejada

```
$ npm init -y
```

## Criar arquivo

```
$ touch server.js
```

## Instalar o express

```
$ npm i express
```

## Criar o arquivo gitignore

```
$ touch .gitignore
```

# .gitignore

```
/node_modules
package-lock.json
```

### Vamos para o código

```
/server.js

import express from 'express';

const app = express();
app.use(express.json());
```

## Rodar o servidor com reload

```
$ node --watch server.js
```

### Configurando o bando de dados

## Acesse o site 

<a href="https://www.prisma.io/docs/getting-started">Prisma.io</a>

# Instalar o Prisma

```
npm install prisma --save-dev

npx prisma init
```

