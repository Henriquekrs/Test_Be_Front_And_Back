import { DataTypes, Model, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('sales', {
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      precoTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dataTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('sales');
  },
};
