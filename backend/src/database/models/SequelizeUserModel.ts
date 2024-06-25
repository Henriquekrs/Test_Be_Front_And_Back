import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import bcrypt from 'bcryptjs';

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
    hooks: {
      beforeCreate: async (user: SequelizeUserModel) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user: SequelizeUserModel) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

export default SequelizeUserModel;
