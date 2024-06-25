import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeSalesModel from './SequelizeSalesModel';

class SequelizeProductModel extends Model<
  InferAttributes<SequelizeProductModel>,
  InferCreationAttributes<SequelizeProductModel>
> {
  declare id: CreationOptional<number>;

  declare nome: string;

  declare descricao: string;

  declare preco: string;

  declare deletedAt: Date | null;
}

SequelizeProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    preco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'products',
    underscored: false,
    paranoid: true,
    timestamps: true,
  }
);

SequelizeProductModel.hasMany(SequelizeSalesModel, {
  foreignKey: 'productId',
  as: 'vendas',
});
SequelizeSalesModel.belongsTo(SequelizeProductModel, {
  foreignKey: 'productId',
  as: 'produto',
});

export default SequelizeProductModel;
