import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  public async create() {
    const { body } = this._req;
    try {
      const newCar = await this._service.create(body);
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAll() {
    const cars = await this._service.getAll();
    return this._res.status(200).json(cars);
  }

  public async getById() {
    const { id } = this._req.params;
    console.log('controller', id);
    try {
      const car = await this._service.getById(id);
      return this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }
}

export default CarController;