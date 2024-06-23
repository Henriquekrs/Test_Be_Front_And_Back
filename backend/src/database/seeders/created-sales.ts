import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'sales',
      [
        {
          clientId: 1,
          productId: 1,
          quantidade: 2,
          precoUnitario: 100.0,
          precoTotal: 200.0,
          dataTime: new Date(),
        },
        {
          clientId: 2,
          productId: 2,
          quantidade: 1,
          precoUnitario: 50.0,
          precoTotal: 50.0,
          dataTime: new Date(),
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
