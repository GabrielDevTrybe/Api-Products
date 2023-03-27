import IUser  from '../Interfaces/IUser';
import { userSchema } from './schemas';


export function usersValidation(product: IUser) {
  const { error } = userSchema.validate(product);
  if (error) {
    return { type: 422, message: error.message };
  }
  return { type: null, message: '' };
}