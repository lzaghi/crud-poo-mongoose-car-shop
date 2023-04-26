import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected status: boolean;

  constructor(
    carObject: ICar,
  ) {
    this.id = carObject.id;
    this.model = carObject.model;
    this.year = carObject.year;
    this.color = carObject.color;
    this.buyValue = carObject.buyValue;
    this.doorsQty = carObject.doorsQty;
    this.seatsQty = carObject.seatsQty;
    this.status = carObject.status || false;
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

  public getStatus(): boolean {
    return this.status;
  }
  public setStatus(value: boolean) {
    this.status = value;
  }
}

export default Car;