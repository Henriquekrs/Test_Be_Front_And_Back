import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'sales',
      [
        {
          client_id: 1,
          product_id: 1,
          quantidade: 2,
          preco_unitario: 100.0,
          preco_total: 200.0,
          data_time: new Date(),
        },
        {
          client_id: 2,
          product_id: 2,
          quantidade: 1,
          preco_unitario: 50.0,
          preco_total: 50.0,
          data_time: new Date(),
        },
        // Adicione mais vendas conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sales', {});
  },
};
