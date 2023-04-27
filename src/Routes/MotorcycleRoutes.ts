import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorcycleRoutes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

motorcycleRoutes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

motorcycleRoutes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default motorcycleRoutes;