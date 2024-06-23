import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'usuario1@example.com',
          password: 'senha123',
          clientId: 1,
        },
        {
          email: 'usuario2@example.com',
          password: 'outrasenha456',
          clientId: 2,
        },
        // Adicione mais usuários conforme necessário
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
