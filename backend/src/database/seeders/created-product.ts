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
        },
        {
          nome: 'Mark 42',
          descricao: 'Descrição do Produto B',
          preco: '50.00',
        },
        {
          nome: 'Escudo Capitão América',
          descricao: 'Descrição do Produto C',
          preco: '150.00',
        },
        {
          nome: 'Mjolnir',
          descricao: 'Descrição do Produto D',
          preco: '200.00',
        },
        {
          nome: 'Manopla do Infinito',
          descricao: 'Descrição do Produto E',
          preco: '300.00',
        },
        {
          nome: 'Capa do Batman',
          descricao: 'Descrição do Produto F',
          preco: '250.00',
        },
        {
          nome: 'Capa da invisibilidade',
          descricao: 'Descrição do Produto G',
          preco: '150.00',
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
