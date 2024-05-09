import { AddVehicle, AddVehicleParams, AddVehicleResult } from '../../domain/usecases/add-vehicle';
import { AddVehicleRepository } from '../protocols';

export class DbAddVehicle implements AddVehicle {
  constructor (private readonly addVehicleRepository: AddVehicleRepository) { }
  async add (params: AddVehicleParams): Promise<AddVehicleResult> {
    return this.addVehicleRepository.add(params)
  }
}