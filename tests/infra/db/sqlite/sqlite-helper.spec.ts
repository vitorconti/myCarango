
import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { VehicleSqliteRepository } from '@/infra/db/sqlite/vehicle-sqlite-repository'
import { SqliteHelper } from '@/infra/db/sqlite/sqlite-helper'

type SutTypes = {
  sut: SqliteHelper
}

const makeSut = (): SutTypes => {
  const sut = new SqliteHelper({ path: ':memory:' })
  return { sut }
}


describe('SqliteHelper', () => {
  describe('mapObjectToArray()', () => {
    test('Should return an error if a invalid object is passed', async () => {
      const { sut } = makeSut()
      const invalidObject = '';
      const mapError = sut.mapObjectToArray(invalidObject);
      expect(mapError).toBeInstanceOf(Error);
    })
  })
})
