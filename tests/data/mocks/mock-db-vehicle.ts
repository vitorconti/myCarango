import { AddVehicleRepository } from '../../../src/data/protocols'
import { AddVehicleParams } from '../../../src/domain/usecases/add-vehicle'



export class AddVehicleRespositorySpy implements AddVehicleRepository {
  params?: AddVehicleParams
  result = true
  async add (params: AddVehicleParams): Promise<boolean> {
    this.params = params
    return this.result
  }
}