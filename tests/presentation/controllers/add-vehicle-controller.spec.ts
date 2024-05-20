import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { AddVehicleController } from '@/presentation/controllers/add-vehicle-controller'
import { Validation } from '@/presentation/protocols'
import { AddVehicleParams } from '@/domain/usecases/add-vehicle'


class ValidationSpy implements Validation {
  error: Error = null
  input: any
  validate (input: AddVehicleParams) {
    this.input = input
    return this.error
  }
}

describe('AddVehicleController', () => {
  test('Should call validation with correct params', () => {
    const validationSpy = new ValidationSpy()
    const sut = new AddVehicleController(validationSpy)
    const request = mockAddVehicleParams()
    sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })
})
