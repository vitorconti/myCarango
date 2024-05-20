import { AddVehicle, AddVehicleParams, AddVehicleResult } from '@/domain/usecases/add-vehicle';
import { Controller, Validation } from '@/presentation/protocols'

export class AddVehicleController implements Controller<AddVehicleParams, AddVehicleResult>{
  constructor (private readonly addVehicle: AddVehicle, private readonly validation: Validation) { }
  handle (request: AddVehicleParams): Promise<AddVehicleResult> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        throw error
      }
      this.addVehicle.add(request)
      return Promise.resolve(false)
    } catch (error) {
      return error
    }
  }
}