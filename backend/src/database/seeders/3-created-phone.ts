import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          numero: '111-1111',
          client_id: 1,
        },
        {
          numero: '222-2222',
          client_id: 2,
        },
        // Adicione mais telefones conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('phones', {});
  },
};
