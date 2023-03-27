import { Model, INTEGER, STRING } from 'sequelize';
import db from './';

class UserModel extends Model {
  // declare <campo>: <tipo>;
  declare readonly id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

UserModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: true,
    type: STRING,
  },

  email: {
    allowNull: true,
    type: STRING,
  },

  password: {
    allowNull: true,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'users',
});

export default UserModel;