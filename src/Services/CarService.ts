import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.createCarDomain(car[0]);
  }

  public async update(id: string, newCar: ICar) {
    const carODM = new CarODM();
    const car = await carODM.update(id, newCar);
    return this.createCarDomain(car);
  }

  public async delete(id: string) {
    const carODM = new CarODM();
    await carODM.delete(id);
  }
}

export default CarService;