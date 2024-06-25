import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeSalesModel extends Model<
  InferAttributes<SequelizeSalesModel>,
  InferCreationAttributes<SequelizeSalesModel>
> {
  declare id: number;

  declare clientId: number;

  declare productId: number;

  declare quantidade: number;

  declare precoUnitario: number;

  declare precoTotal: number;

  declare dataTime: Date;
}

SequelizeSalesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
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
    timestamps: false,
  }
);

export default SequelizeSalesModel;
