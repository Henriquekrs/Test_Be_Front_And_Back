import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeUserModel extends Model<
  InferAttributes<SequelizeUserModel>,
  InferCreationAttributes<SequelizeUserModel>
> {
  declare id: CreationOptional<number>;

  declare email: string;

  declare password: string;
}

SequelizeUserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    underscored: true,
    timestamps: false,
  }
);

export default SequelizeUserModel;
