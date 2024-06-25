import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          nome: 'Martelo Thor',
          descricao: 'Descrição do Produto A',
          preco: '100.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Mark 42',
          descricao: 'Descrição do Produto B',
          preco: '50.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Escudo Capitão América',
          descricao: 'Descrição do Produto C',
          preco: '150.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Mjolnir',
          descricao: 'Descrição do Produto D',
          preco: '200.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Manopla do Infinito',
          descricao: 'Descrição do Produto E',
          preco: '300.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Capa do Batman',
          descricao: 'Descrição do Produto F',
          preco: '250.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Capa da invisibilidade',
          descricao: 'Descrição do Produto G',
          preco: '150.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adicione mais produtos conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
};
