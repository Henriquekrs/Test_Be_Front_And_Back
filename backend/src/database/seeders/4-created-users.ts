import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'teste1@teste.com',
          password:
            '$2a$10$.7zydCQiL8S5wjVJw2U50.15wXiCF4RbSwyp/ag3aqQrQX3MPoIsu',
          // A senha é 'Password1@'
        },
        {
          email: 'teste2@teste.com',
          password:
            '$2a$10$cwET2.rqFvZTzNDizcxWGOCgqhm7MfEoEOJxNkzFmt0DcinhjggTm',
          // A senha é 'Password2@'
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
