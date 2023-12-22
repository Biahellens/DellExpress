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

O projeto foi construido de estrutura de contêineres com o Docker, incluindo no mesmo um banco de dados PostgreSQL.

### Executando o container do server

Para iniciar o nosso server o primeiro passo é acessar a nossa pasta server:

```bash
$ cd server
```

Instalar as dependências através do seguinte comando:

```bash
$ yarn install
```

Em seguida precisamos iniciar o container do PostgreSQL:

```bash
$ docker-compose up -d
```

agora precisamos configurar o nosso Prisma: 

```bash
$ yarn prisma generate
```

e criar as tabelas no banco de dados:
  - Caso peça o nome da migration, opte por 'dellexpress'

```bash
$ yarn prisma migrate dev
```

iniciar nossa aplicação: 

```bash
$ yarn start
```

### Inserindo dados:
Para inserir dados a partir de dados ficticios apenas para uso prévio pe possível através do seguinte comando:

```bash
$ node src/addDados/insert.js
```

### Iniciando o Front-end:

Para iniciar o nosso front-end o primeiro passo é acessar a nossa pasta client: 

```bash
$ cd client
```

Em seguida precisamos criar a nossa imagem através do seguinte comando:

```bash
$ docker build -t dellexpress-front .
```

e agora podemos iniciar o nosso contêiner:

```bash
$ docker run -p 3000:3000 dellexpress-front
```

### Executando a aplicação

Agora com a aplicação configurada é possível acessa-la através da seguinte URL para ver se esta tudo certo:

- http://localhost:3000/

E poderá acessar a API em:
- http://localhost:8080/users

