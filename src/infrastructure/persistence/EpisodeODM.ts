import { isValidObjectId, Model, UpdateQuery, Schema, model } from 'mongoose';
import { IEpisode } from '../../domain/entities/interfaces/IEpisode';
import { IPersistence } from '../../domain/repository/IPersistence';

class EpisodeODM implements IPersistence {
  private _schema: Schema;
  private _model: Model<IEpisode>

  constructor() {
    this._schema = new Schema<IEpisode>({
      season_id: { type: String,  required: true, ref: 'Season' },
      title: { type: String, required: true },
      description: { type: String, required: true },
      number: { type: Number, required: true },
      cover: { type: String, required: true },
    });
    this._model = model('Episode', this._schema);
  }

  public async create(obj: IEpisode): Promise<IEpisode> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<IEpisode | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<IEpisode[]> {
    return this._model.find();
  }

  public async update(_id: string, obj: Partial<IEpisode>):
    Promise<IEpisode | null> {
    if (!isValidObjectId(_id)) throw Error('Erro');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<IEpisode>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<IEpisode | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}
export default EpisodeODM;