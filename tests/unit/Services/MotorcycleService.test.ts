import Sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const inputArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

describe('Deveria realizar todos os serviços', function () {
  describe('Recuperar todos as motos', function () {
    it('Recupera com sucesso', async function () {
      const motorcyclesOutput = inputArray.map((moto) => new Motorcycle(moto));

      Sinon.stub(Model, 'find').resolves(motorcyclesOutput);

      const service = new MotorcycleService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(motorcyclesOutput);
    });
  });

  describe('Recuperar uma única moto', function () {
    it('Recupera com sucesso', async function () {
      const motorcycleOutput = new Motorcycle(inputArray[0]);

      Sinon.stub(Model, 'find').resolves([motorcycleOutput]);

      const service = new MotorcycleService();
      const result = await service.getById('634852326b35b59438fbea2f');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('Cadastrar uma moto', function () {
    it('Cadastra com sucesso', async function () {
      const motorcycleOutput = new Motorcycle(inputArray[0]);

      Sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create({
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      });

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('Atualizar uma moto', function () {
    it('Atualiza com sucesso', async function () {
      const motorcycleOutput = new Motorcycle(inputArray[0]);

      Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.update(
        '634852326b35b59438fbea2f',
        inputArray[0],
      );

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  afterEach(function () {
    Sinon.restore();
  });
});