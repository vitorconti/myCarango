
import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { VehicleSqliteRepository } from '@/infra/db/sqlite/vehicle-sqlite-repository'
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper'

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
    test('Should return true on if create add vehicle succeded', async () => {
      const { sut, dbInstance } = makeSut()
      const addAccountParams = mockAddVehicleParams()
      await sut.add(addAccountParams)
      const resultSet = await dbInstance.fetchAll('SELECT_ALL_VEHICLE_TABLE') as []
      dbInstance.closeDbConnection()
      expect(resultSet.length).toBe(1)
    })
  })
})
