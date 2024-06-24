import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

import SequelizeAdressModel from './SequelizeAdressModel';
import SequelizePhoneModel from './SequelizePhoneModel';
import SequelizeSalesModel from './SequelizeSalesModel';
import SequelizeUserModel from './SequelizeUserModel';

class SequelizeClientModel extends Model<
  InferAttributes<SequelizeClientModel>,
  InferCreationAttributes<SequelizeClientModel>
> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare cpf: string;
}

SequelizeClientModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: 'clients',
    underscored: false,
    timestamps: false,
  }
);

SequelizeClientModel.hasMany(SequelizeAdressModel, {
  foreignKey: 'clientId',
  as: 'enderecos',
});
SequelizeAdressModel.belongsTo(SequelizeClientModel, {
  foreignKey: 'id',
  as: 'cliente',
});
SequelizeClientModel.hasMany(SequelizePhoneModel, {
  foreignKey: 'clientId',
  as: 'telefones',
});
SequelizePhoneModel.belongsTo(SequelizeClientModel, {
  foreignKey: 'id',
  as: 'cliente',
});
SequelizeClientModel.hasMany(SequelizeSalesModel, {
  foreignKey: 'clientId',
  as: 'vendas',
});
SequelizeSalesModel.belongsTo(SequelizeClientModel, {
  foreignKey: 'id',
  as: 'cliente',
});

export default SequelizeClientModel;
