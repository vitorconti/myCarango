import { AddVehicleParams } from '@/domain/add-vehicle'

export interface AddVehicleRepository {
  add (params: AddVehicleRepositoryParams): Promise<AddVehicleRepositoryResult>
}

type AddVehicleRepositoryParams = AddVehicleParams
type AddVehicleRepositoryResult = boolean