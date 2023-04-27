import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    carObject: ICar,
  ) {
    super(carObject);
    this.doorsQty = carObject.doorsQty;
    this.seatsQty = carObject.seatsQty;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }
  public setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}

export default Car;