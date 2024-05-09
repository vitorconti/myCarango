import { randVehicleModel, randVehicleManufacturer, randWord } from '@ngneat/falso';
import { AddVehicleParams } from '../../../src/domain/usecases/add-vehicle';

export function mockAddVehicleParams (): AddVehicleParams {
  return {
    brand: randVehicleManufacturer(),
    name: randVehicleModel(),
    year: randWord()
  }
}