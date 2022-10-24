import { isValidObjectId, Model, UpdateQuery, Schema, model } from 'mongoose';
import { IUser } from '../../domain/entities/interfaces/IUser';
import { IPersistence } from '../../domain/repository/IPersistence';

class UserODM implements IPersistence {
  private _schema: Schema;
  private _model: Model<IUser>;

  constructor() {
    this._schema = new Schema<IUser>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    });
    this._model = model('User', this._schema);
  }

  public async create(obj: IUser): Promise<IUser> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<IUser | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<IUser[]> {
    return this._model.find();
  }

  public async update(_id: string, obj: Partial<IUser>):
    Promise<IUser | null> {
    if (!isValidObjectId(_id)) throw Error('Erro');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<IUser>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<IUser | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}
export default UserODM;