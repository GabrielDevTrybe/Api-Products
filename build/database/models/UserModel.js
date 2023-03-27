"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
// import OtherModel from './OtherModel';
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    username: {
        allowNull: true,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: true,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: true,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
    modelName: 'users',
});
exports.default = User;
