import Sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

const inputArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

describe('Deveria realizar todos os serviços', function () {
  describe('Recuperar todos os carros', function () {
    it('Recupera com sucesso', async function () {
      const carsOutput = inputArray.map((car) => new Car(car));

      Sinon.stub(Model, 'find').resolves(carsOutput);

      const service = new CarService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(carsOutput);
    });
  });

  describe('Recuperar um único carro', function () {
    it('Recupera com sucesso', async function () {
      const carOutput = new Car(inputArray[0]);

      Sinon.stub(Model, 'find').resolves([carOutput]);

      const service = new CarService();
      const result = await service.getById('634852326b35b59438fbea2f');

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('Cadastrar um carro', function () {
    it('Cadastra com sucesso', async function () {
      const carOutput = new Car(inputArray[0]);

      Sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create({
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      });

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('Atualizar um carro', function () {
    it('Atualiza com sucesso', async function () {
      const carOutput = new Car(inputArray[0]);

      Sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

      const service = new CarService();
      const result = await service.update(
        '634852326b35b59438fbea2f',
        inputArray[0],
      );

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  afterEach(function () {
    Sinon.restore();
  });
});