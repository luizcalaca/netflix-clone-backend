import { isValidObjectId, Model, UpdateQuery, Schema, model } from 'mongoose';
import { ISeason } from '../../domain/entities/interfaces/ISeason';
import { IPersistence } from '../../domain/repository/IPersistence';

class SeasonODM implements IPersistence {
  private _schema: Schema;
  private _model: Model<ISeason>

  constructor() {
    this._schema = new Schema<ISeason>({
      movie_id: { type: String,  required: true, ref: 'Movie' },
      title: { type: String, required: true },
    });
    this._model = model('Season', this._schema);
  }

  public async create(obj: ISeason): Promise<ISeason> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<ISeason | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<ISeason[]> {
    return this._model.find();
  }

  public async update(_id: string, obj: Partial<ISeason>):
    Promise<ISeason | null> {
    if (!isValidObjectId(_id)) throw Error('Erro');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ISeason>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<ISeason | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}
export default SeasonODM;