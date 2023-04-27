import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotorcycleService();
  }

  public async create() {
    const { body } = this._req;
    try {
      const newMotorcycle = await this._service.create(body);
      return this._res.status(201).json(newMotorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAll() {
    const motorcycles = await this._service.getAll();
    return this._res.status(200).json(motorcycles);
  }

  public async getById() {
    const { id } = this._req.params;
    try {
      const motorcycle = await this._service.getById(id);
      return this._res.status(200).json(motorcycle);
    } catch (error) {
      this._next(error);
    }
  }

  public async update() {
    const { id } = this._req.params;
    const { body } = this._req; 
    try {
      const motorcycle = await this._service.update(id, body);
      return this._res.status(200).json(motorcycle);
    } catch (error) {
      this._next(error);
    }
  }
}

export default MotorcycleController;