import { AddVehicleParams } from '@/domain/usecases/add-vehicle'

export interface AddVehicleRepository {
  add (params: AddVehicleRepositoryParams): Promise<AddVehicleRepositoryResult>
}

export type AddVehicleRepositoryParams = AddVehicleParams
type AddVehicleRepositoryResult = boolean