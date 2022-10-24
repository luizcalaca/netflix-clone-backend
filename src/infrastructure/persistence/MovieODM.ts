import { isValidObjectId, Model, UpdateQuery, Schema, model } from 'mongoose';
import { IMovie } from '../../domain/entities/interfaces/IMovie';
import { IPersistence } from '../../domain/repository/IPersistence';

class MovieODM implements IPersistence {
  private _schema: Schema;
  private _model: Model<IMovie>

  constructor() {
    this._schema = new Schema<IMovie>({
      type: { type: String,  required: true },
      title: { type: String, required: true },
      cover: { type: String, required: true },
      logo: { type: String, required: true },
      thumb: { type: String, required: true },
      description: { type: String, required: true },
      artists: { type: [String], required: true },
      gender: { type: [String], required: true },
      cenes_moments: { type: [String], required: true },
    });
    this._model = model('Movie', this._schema);
  }

  public async create(obj: IMovie): Promise<IMovie> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<IMovie | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<IMovie[]> {
    return this._model.find();
  }

  public async update(_id: string, obj: Partial<IMovie>):
    Promise<IMovie | null> {
    if (!isValidObjectId(_id)) throw Error('Erro');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<IMovie>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<IMovie | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}
export default MovieODM;