import { Request, Response } from 'express';
import { IUser } from '../../domain/entities/interfaces/IUser';
import UserUseCase from '../../domain/usecase/UserService';

class UserController {

  constructor(private userUseCase: UserUseCase) {}

  public create = async (req: Request, res: Response) => {
    const user: IUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    const result = await this.userUseCase.create(user)
    return res.status(201).json(result);
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.userUseCase.read()
    return res.status(201).json(result);
  }
}
export default UserController;
