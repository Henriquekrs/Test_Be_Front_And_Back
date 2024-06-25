import { DataTypes, Model, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('sales', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
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
      preco_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      preco_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      data_time: {
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
