import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { AddVehicleController } from '@/presentation/controllers/add-vehicle-controller'
import { ValidationSpy } from '@/tests/presentation/mocks'


type SutTypes = {
  sut: AddVehicleController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new AddVehicleController(validationSpy)
  return {
    sut, validationSpy
  }
}

describe('AddVehicleController', () => {
  test('Should call validation with correct params', () => {
    const { sut, validationSpy } = makeSut()
    const request = mockAddVehicleParams()
    sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })
})
