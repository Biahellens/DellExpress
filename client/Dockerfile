# Use a imagem oficial do Node.js
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de aplicação para o contêiner
COPY . .

# Instala as dependências usando o npm
RUN npm install

# Expõe a porta 3000 para fora do contêiner
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
