import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status: boolean;

  constructor(vehicleObject: IVehicle) {
    this.id = vehicleObject.id;
    this.model = vehicleObject.model;
    this.year = vehicleObject.year;
    this.color = vehicleObject.color;
    this.buyValue = vehicleObject.buyValue;
    this.status = vehicleObject.status || false;
  }

  public getId(): string | undefined {
    return this.id;
  }
  public setId(value: string | undefined) {
    this.id = value;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getYear(): number {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
  }

  public getColor(): string {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }
  public setBuyValue(value: number) {
    this.buyValue = value;
  }

  public getStatus(): boolean {
    return this.status;
  }
  public setStatus(value: boolean) {
    this.status = value;
  }
}

export default Vehicle;