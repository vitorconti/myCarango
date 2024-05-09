import { DbAddVehicle } from '@/data/usecases'
import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { AddVehicleRespositorySpy } from '@/tests/data/mocks/mock-db-vehicle'
import { throwError } from '@/tests/domain/mocks/test-helpers'

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
  test('Should call AddVehicleRepository with correct values', async () => {
    const { sut, addVehicleRepositorySpy } = makeSut()
    const mockParams = mockAddVehicleParams()
    await sut.add(mockParams)
    expect(addVehicleRepositorySpy.params).toEqual(mockParams)
  })
  test('Should throw if AddVehicleRepository throws', async () => {
    const { sut, addVehicleRepositorySpy } = makeSut()
    jest.spyOn(addVehicleRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddVehicleParams())
    await expect(promise).rejects.toThrow()
  })
})
