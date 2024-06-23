import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          nome: 'Produto A',
          descricao: 'Descrição do Produto A',
          preco: '100.00',
        },
        {
          nome: 'Produto B',
          descricao: 'Descrição do Produto B',
          preco: '50.00',
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
