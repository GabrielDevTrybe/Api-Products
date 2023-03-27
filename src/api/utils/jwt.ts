import { Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import  IUser  from '../Interfaces/IUser';


export default class JwtToken {
  private JWT_SECRET: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.JWT_SECRET = process.env.JWT_SECRET || ('manteiga' as Secret);
    this.jwtConfig = {
      expiresIn: '20d',
      algorithm: 'HS256',
    };
  }

  public generate = (payload: Pick<IUser, 'id' | 'username'>) =>
    sign(payload, this.JWT_SECRET, this.jwtConfig);

  public authenticate = (token: string) => verify(token, this.JWT_SECRET);
}