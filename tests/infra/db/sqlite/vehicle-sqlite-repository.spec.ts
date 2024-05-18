
import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { VehicleSqliteRepository } from '@/infra/db/sqlite/vehicle-sqlite-repository'
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper'
import { MyCarangoSqliteStatements } from '@/infra/db/sqlite/sqlite-sql-statements'

type SutTypes = {
  sut: VehicleSqliteRepository
  dbInstance: SqliteHelper
}

const makeSut = (): SutTypes => {
  const dbInstance = new SqliteHelper({ path: ':memory:' })
  const sut = new VehicleSqliteRepository(dbInstance)
  return { sut, dbInstance }
}


describe('VehicleSqliteRepository', () => {
  describe('add()', () => {

    const { sut, dbInstance } = makeSut()
    beforeAll(() => {
      dbInstance.db.serialize(() => dbInstance.db.run(MyCarangoSqliteStatements.CREATE_STATEMENTS.CREATE_VEHICLE_TABLE))
    })
    test('Should return true on if create add vehicle succeded', async () => {
      const addAccountParams = mockAddVehicleParams()
      await sut.add(addAccountParams)
      dbInstance.db.all(MyCarangoSqliteStatements.SELECT_STATEMENTS.SELECT_ALL_VEHICLE_TABLE, (_err, rows) => {
        expect(rows.length).toBe(1)
      })
      dbInstance.db.close()
    })
  })
})
