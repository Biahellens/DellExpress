![Hortinja](https://github.com/Biahellens/hortinja/blob/main/client/src/assets/Images/Logo.png?raw=true)

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


