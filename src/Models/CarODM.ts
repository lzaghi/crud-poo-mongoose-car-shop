import { Model, Schema, isValidObjectId, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      status: { type: Boolean },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar[]> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');

    const car = await this.model.find({ _id: id });
    if (!car.length) throw Error('Car not found');
    return car;
  }

  public async update(id: string, newCar: ICar): Promise<ICar> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');

    const car = await this.model.findByIdAndUpdate(
      { _id: id },
      { ...newCar },
      { new: true },
    );
    if (!car) throw Error('Car not found');
    return car;
  }
}

export default CarODM;