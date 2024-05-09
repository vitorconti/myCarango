import { AddVehicle, AddVehicleParams, AddVehicleResult } from '../../domain/usecases/add-vehicle';
import { AddVehicleRepository } from '../protocols';

export class DbAddVehicle implements AddVehicle {
  constructor (private readonly addVehicleRepository: AddVehicleRepository) { }
  async add (params: AddVehicleParams): Promise<AddVehicleResult> {
    await this.addVehicleRepository.add(params)
    return Promise.resolve(true)
  }
}