import { Request, Response } from 'express';
import { IUser } from '../../domain/entities/interfaces/IUser';
import { UserRepository } from '../../domain/repository/UserRepository';
import UserUseCase from '../../domain/usecase/UserService';
import UserService from '../../domain/usecase/UserService';
import UserODM from '../models/UserODM';

class UserController {

  constructor(private userUseCase: UserUseCase) {}

  public create = async (req: Request, res: Response) => {
    const user: IUser = {
      name: req.body.name,
      email: req.body.isbn,
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
