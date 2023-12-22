/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const fs = require('fs/promises');

const prisma = new PrismaClient();

// Função para criar um hash da senha usando bcrypt
async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Função para criar um novo usuário com senha encriptada
async function criarUsuarioComSenhaEncriptada(name, email, password) {
  const hashedPassword = await hashPassword(password);

  const novoUsuario = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  console.log('Novo usuário criado:', novoUsuario);
}

// Função para inserir usuários a partir de um arquivo JSON
async function inserirUsuariosDeJSON(filePath) {
  try {
    const usuariosData = await fs.readFile(filePath, 'utf-8');
    const usuarios = JSON.parse(usuariosData);

    for (const usuario of usuarios) {
      await criarUsuarioComSenhaEncriptada(usuario.name, usuario.email, usuario.password);
    }

    console.log('Usuários inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir usuários:', error);
  }
}

// Função para criar um novo pedido
async function criarPedido(customerName, addressDelivery, orderStatus) {
  const novoPedido = await prisma.order.create({
    data: {
      customerName: customerName,
      addressDelivery: addressDelivery,
      orderStatus: orderStatus,
    },
  });

  console.log('Novo pedido criado:', novoPedido);
}

// Função para inserir pedidos a partir de um arquivo JSON
async function inserirPedidosDeJSON(filePath) {
  try {
    const pedidosData = await fs.readFile(filePath, 'utf-8');
    const pedidos = JSON.parse(pedidosData);

    for (const pedido of pedidos) {
      await criarPedido(pedido.customerName, pedido.addressDelivery, pedido.orderStatus);
    }

    console.log('Pedidos inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir pedidos:', error);
  }
}

// Exemplo de uso para inserir usuários e pedidos a partir de arquivos JSON
(async () => {
  await inserirUsuariosDeJSON('./user.json');
  await inserirPedidosDeJSON('./content.json');

  await prisma.$disconnect(); // Desconecta do banco de dados após a inserção
})();
