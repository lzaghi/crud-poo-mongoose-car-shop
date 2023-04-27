import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    const newVehicle = await this.model.create({ ...vehicle });
    return newVehicle;
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T[]> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');

    const vehicle = await this.model.find({ _id: id });
    if (!vehicle.length) throw Error(`${this.modelName} not found`);
    return vehicle;
  }

  public async update(id: string, newVehicle: T): Promise<T> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');

    const vehicle = await this.model.findByIdAndUpdate(
      { _id: id },
      { ...newVehicle } as UpdateQuery<T>,
      { new: true },
    );
    if (!vehicle) throw Error(`${this.modelName} not found`);
    return vehicle;
  }

  public async delete(id: string) {
    await this.getById(id);
    await this.model.findByIdAndDelete(
      { _id: id },
    );
  }
}

export default AbstractODM;