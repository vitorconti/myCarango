import { mockAddVehicleParams } from '@/tests/domain/mocks'
import { AddVehicleController } from '@/presentation/controllers/add-vehicle-controller'
import { ValidationSpy } from '@/tests/presentation/mocks'
import { AddVehicleSpy } from '@/tests/presentation/mocks/add-vehicle-spy'


type SutTypes = {
  sut: AddVehicleController
  validationSpy: ValidationSpy
  addVehicleSpy: AddVehicleSpy
}

const makeSut = (): SutTypes => {
  const addVehicleSpy = new AddVehicleSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddVehicleController(addVehicleSpy, validationSpy)
  return {
    sut, validationSpy, addVehicleSpy
  }
}

describe('AddVehicleController', () => {
  test('Should call validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockAddVehicleParams()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })
  test('Should return an Error if validations fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const error = sut.handle({ brand: 'any_brand', name: 'any_name', year: null })
    expect(error).toBeInstanceOf(Error)
  })
  test('Should call AddVehicle usecase with correct params', async () => {
    const { sut, addVehicleSpy } = makeSut()
    const request = mockAddVehicleParams()
    await sut.handle(request)
    expect(addVehicleSpy.addVehicleParams).toEqual(request)
  })
  test('Should return an Error if AddVehicle throws', async () => {
    const { sut, addVehicleSpy } = makeSut()
    jest.spyOn(addVehicleSpy, 'add').mockImplementationOnce((): never => {
      throw new Error()
    })
    const httpResponse = await sut.handle(mockAddVehicleParams())
    expect(httpResponse).toEqual(new Error())
  })
  test('Should call return true if AddVehicle use case succeeds creating a new vehicle', async () => {
    const { sut } = makeSut()
    const request = mockAddVehicleParams()
    const sutResponse = await sut.handle(request)
    expect(sutResponse).toBeTruthy()
  })
})
