import { ModelStatic } from 'sequelize';
import UserModel from '../../database/models/UserModel';
import IUserService from '../Interfaces/IUserService';

class UserService implements IUserService {
  protected model: ModelStatic<UserModel> = UserModel;

  async findAll(): Promise<UserModel[]> {
    return await this.model.findAll();
  
  }
}

export default UserService;
