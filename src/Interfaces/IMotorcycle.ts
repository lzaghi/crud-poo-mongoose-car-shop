import MotorcycleTypes from '../utils/motorcycleTypes';
import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle{
  category: MotorcycleTypes,
  engineCapacity: number,
}

export default IMotorcycle;