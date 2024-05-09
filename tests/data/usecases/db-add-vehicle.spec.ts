import { DbAddVehicle } from '@/data/usecases'
import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { AddVehicleRespositorySpy } from '@/tests/data/mocks/mock-db-vehicle'

type SutTypes = {
  sut: DbAddVehicle
  addVehicleRepositorySpy: AddVehicleRespositorySpy
}

const makeSut = (): SutTypes => {
  const addVehicleRepositorySpy = new AddVehicleRespositorySpy()
  const sut = new DbAddVehicle(addVehicleRepositorySpy)
  return { sut, addVehicleRepositorySpy }
}

describe('DbAddVehicle Usecase', () => {
  test('Should call AddVehicleRepository with correct values', () => {
    const { sut, addVehicleRepositorySpy } = makeSut()
    const mockParams = mockAddVehicleParams()
    sut.add(mockParams)
    expect(addVehicleRepositorySpy.params).toEqual(mockParams)
  })
})
