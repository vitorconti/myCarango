import { AddVehicleRepository } from '@/data/protocols';
import { AddVehicleParams } from '@/domain/usecases/add-vehicle';
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper';


export class VehicleSqliteRepository implements AddVehicleRepository {
  constructor (private readonly sqlLiteHelper: SqliteHelper) {
  }
  async add (params: AddVehicleParams): Promise<boolean> {
    this.sqlLiteHelper.insertInto('INSERT_VEHICLE_TABLE', params)
    return true
  }
}