import { AddVehicle, AddVehicleParams } from '@/domain/usecases/add-vehicle';

export class AddVehicleSpy implements AddVehicle {
  addVehicleParams: AddVehicleParams
  result = true
  async add (params: AddVehicleParams): Promise<boolean> {
    this.addVehicleParams = params
    return this.result
  }
}