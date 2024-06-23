import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeClientModel from './SequelizeClientModel';

class SequelizePhoneModel extends Model<
  InferAttributes<SequelizePhoneModel>,
  InferCreationAttributes<SequelizePhoneModel>
> {
  declare id: CreationOptional<number>;

  declare numero: string;

  declare clientId: number;
}

SequelizePhoneModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'phones',
    underscored: true,
  }
);

export default SequelizePhoneModel;
