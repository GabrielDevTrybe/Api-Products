
import User from "../../database/models/UserModel";

export default interface IUserService {
  findAll(): Promise<User[]>
  // createUser();
}