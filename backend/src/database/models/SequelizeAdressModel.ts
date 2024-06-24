import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeAdressModel extends Model<
  InferAttributes<SequelizeAdressModel>,
  InferCreationAttributes<SequelizeAdressModel>
> {
  declare id: CreationOptional<number>;

  declare rua: string;

  declare cidade: string;

  declare estado: string;

  declare cep: string;

  declare pais: string;

  declare clientId: number;
}

SequelizeAdressModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
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
    modelName: 'adress',
    underscored: true,
    timestamps: false,
  }
);

export default SequelizeAdressModel;
