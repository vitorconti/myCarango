import { RetriveVehicleResult } from '@/domain/usecases/retrive-all-vehicles'

export interface RetriveAllVehicleRepository {
  retrive (): Promise<RetriveAllVehicleRepositoryResult>
}

export type RetriveAllVehicleRepositoryResult = RetriveVehicleResult