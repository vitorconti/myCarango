import { AddVehicleRepository } from '@/data/protocols';
import { AddVehicleParams } from '@/domain/usecases/add-vehicle';
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper';
import { MyCarangoSqliteStatements } from '@/infra/db/sqlite/sqlite-sql-statements';


export class VehicleSqliteRepository implements AddVehicleRepository {
  constructor (private readonly sqlLiteHelper: SqliteHelper) {
  }
  async add (params: AddVehicleParams): Promise<boolean> {
    const mapToObjectParams = this.sqlLiteHelper.mapObjectToArray(params)
    this.sqlLiteHelper.db.run(MyCarangoSqliteStatements.INSERT_STATEMENTS.INSERT_VEHICLE_TABLE, mapToObjectParams)
    return true
  }
}