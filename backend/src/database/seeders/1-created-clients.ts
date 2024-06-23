import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'clients',
      [
        {
          name: 'Cliente 1',
          cpf: '12345678901',
        },
        {
          name: 'Cliente 2',
          cpf: '98765432109',
        },
        // Adicione mais clientes conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('clients', {});
  },
};
