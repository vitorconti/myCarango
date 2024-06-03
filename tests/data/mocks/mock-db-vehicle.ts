import { AddVehicleRepository, AddVehicleRepositoryParams } from '@/data/protocols'
import { RetriveAllVehicleRepository } from '@/data/protocols/retrive-all-vehicle-repository'
import { RetriveVehicleResult } from '@/domain/usecases/retrive-all-vehicles'
import { mockAddVehicleParams } from '@/tests/domain/mocks'


export class AddVehicleRespositorySpy implements AddVehicleRepository {
  params?: AddVehicleRepositoryParams
  result = true
  async add (params: AddVehicleRepositoryParams): Promise<boolean> {
    this.params = params
    return this.result
  }
}

export class RetriveAllVehicleRespositorySpy implements RetriveAllVehicleRepository {
  result = { id: 1, ...mockAddVehicleParams() }
  async retrive (): Promise<RetriveVehicleResult> {
    return this.result
  }
}