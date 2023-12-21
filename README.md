![DellExpress](https://github.com/Biahellens/DellExpress/blob/main/client/public/logo.svg)

# DellExpress

Projeto referente ao rastreamento de entregas. Visando o gerênciamento de status dessas entregas.

- [DellExpress](#DellExpress)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [Server](#server)
    - [Cliente](#cliente)

## Tecnologias

Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [Node](https://nodejs.org/en/);
- [React](https://pt-br.reactjs.org/);
- [TypeScript](https://www.typescriptlang.org/);
- [Redux](https://redux.js.org/);
- [React-Router-dom](https://reactrouter.com/en/main);
- [Styled-components](https://styled-components.com/);
- [Prisma](https://www.prisma.io/);
- [PostgreSQL](https://www.postgresql.org/);
- [NestJS](https://nestjs.com/);
- [Docker](https://www.docker.com/).

## Inicializando

O projeto foi construido de estrutura de contêineres com o Docker, incluindo no mesmo um banco de dados PostgreSQL. O banco de dados foi salvo um backup dele para que seja realizada a vizualização deste projeto sem qualquer empecilho, e ao executar o Docker já é feita a restauração e a execução do mesmo.

### Executando o container

Com tudo configurado é possível estar subindo os contêineres para a aplicação estar no ar através do seguinte comando:

```bash
$ docker-compose up --build
```

ou pode ser executado em background através do seguintes comando:

```bash
$ docker-compose up --build -d
```

### Criando o banco de dados:

Para estar criando ou para atualizar o banco de dados usando o Prisma :

```bash
$ docker-compose exec prisma-migrate /bin/bash -c "npm install && npx prisma db push --preview-feature"
```

### Iniciando estrutura do banco de dados (migrate/seeds):

```bash
$ docker-compose exec nest-api /bin/bash -c "npm install && npm run start:dev"
```

### Iniciar o Front-end

```bash
$ docker-compose exec frontend /bin/bash -c "npm install && npm start"
```

### Executando a aplicação

Agora com a aplicação configurada é possível acessa-la através da seguinte URL para ver se esta tudo certo:

- http://localhost:3000/

E poderá acessar a API em:
- http://localhost:3001

