import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeClientModel from './SequelizeClientModel';

class SequelizeSalesModel extends Model<
  InferAttributes<SequelizeSalesModel>,
  InferCreationAttributes<SequelizeSalesModel>
> {
  declare clientId: number;

  declare productId: number;

  declare quantidade: number;

  declare precoUnitario: number;

  declare precoTotal: number;

  declare dataTime: Date;
}

SequelizeSalesModel.init(
  {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  },
  {
    sequelize: db,
    modelName: 'sales',
    underscored: true,
  }
);

export default SequelizeSalesModel;
