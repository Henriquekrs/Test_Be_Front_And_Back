import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'adress',
      [
        {
          rua: 'Rua A',
          cidade: 'Cidade A',
          estado: 'Estado A',
          cep: '12345-678',
          pais: 'País A',
          clientId: 1,
        },
        {
          rua: 'Rua B',
          cidade: 'Cidade B',
          estado: 'Estado B',
          cep: '98765-432',
          pais: 'País B',
          clientId: 2,
        },
        // Adicione mais endereços conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('addresses', {});
  },
};
