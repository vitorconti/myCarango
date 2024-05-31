import { DbAddVehicle } from '@/data/usecases'
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper'
import { VehicleSqliteRepository } from '@/infra/db/sqlite/vehicle-sqlite-repository'
import { AddVehicleController } from '@/presentation/controllers/add-vehicle-controller'
import { NonNullableFields } from '@/presentation/validation/non-nullable-fields-validator'
import { ValidationComposite } from '@/presentation/validation/validator-composite'

export const makeAddVehicleController = (): AddVehicleController => {
  console.log(process.env.DB_PATH)
  const sqliteHelper = new SqliteHelper({ path: process.env.DB_PATH })
  const addVehicleRepository = new VehicleSqliteRepository(sqliteHelper)
  const dbAddVehicle = new DbAddVehicle(addVehicleRepository)
  const validation = new ValidationComposite([new NonNullableFields()])
  return new AddVehicleController(dbAddVehicle, validation)
}