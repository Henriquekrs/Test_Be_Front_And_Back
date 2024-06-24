import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'usuario1@example.com',
          password:
            '$2a$10$UetYgJnDjf75m75o5sWEeuvxTMfHgn1szX0EmK5MF00zm3UgayK/a.',
          // A senha é 'Passqword1.'
        },
        {
          email: 'usuario2@example.com',
          password:
            '$2a$10$P2Ka6heAh6WhKTmC5vrwNuNf4JDQoyZcrR6V3RIR6RcK6jnGenUvq.',
          // A senha é 'Passqword2.'
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
