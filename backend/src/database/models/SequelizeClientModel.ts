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

class SequelizeClientModel extends Model<
  InferAttributes<SequelizeClientModel>,
  InferCreationAttributes<SequelizeClientModel>
> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare cpf: string;

  declare enderecos?: SequelizeAdressModel[];

  declare telefones?: SequelizePhoneModel[];
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
  foreignKey: 'clientId',
  as: 'cliente',
});
SequelizeClientModel.hasMany(SequelizePhoneModel, {
  foreignKey: 'clientId',
  as: 'telefones',
});
SequelizePhoneModel.belongsTo(SequelizeClientModel, {
  foreignKey: 'clientId',
  as: 'cliente',
});
SequelizeClientModel.hasMany(SequelizeSalesModel, {
  foreignKey: 'clientId',
  as: 'vendas',
});
SequelizeSalesModel.belongsTo(SequelizeClientModel, {
  foreignKey: 'clientId',
  as: 'cliente',
});

export default SequelizeClientModel;
