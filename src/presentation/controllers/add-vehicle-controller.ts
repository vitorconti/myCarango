import { AddVehicleParams, AddVehicleResult } from '@/domain/usecases/add-vehicle';
import { Controller, Validation } from '@/presentation/protocols'

export class AddVehicleController implements Controller<AddVehicleParams, AddVehicleResult>{
  constructor (private readonly validation: Validation) { }
  handle (request: AddVehicleParams): Promise<AddVehicleResult> {
    this.validation.validate(request)
    return Promise.resolve(false)
  }
}