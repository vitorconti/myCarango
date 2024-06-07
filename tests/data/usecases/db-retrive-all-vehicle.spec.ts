import { DbRetriveAllVehicle } from '@/data/usecases/db-retrive-all-vehicle'
import { RetriveAllVehicleRespositorySpy } from '@/tests/data/mocks/mock-db-vehicle'
import { throwError } from '@/tests/domain/mocks/test-helpers'

type SutTypes = {
  sut: DbRetriveAllVehicle
  retriveAllVehicleRepositorySpy: RetriveAllVehicleRespositorySpy
}
const makeSut = (): SutTypes => {
  const retriveAllVehicleRepositorySpy = new RetriveAllVehicleRespositorySpy()
  const sut = new DbRetriveAllVehicle(retriveAllVehicleRepositorySpy)
  return {
    sut, retriveAllVehicleRepositorySpy
  }
}
describe('DbRetriveAllVehicle usecase', () => {

  test('Should call RetriveAllVehicleRepository ', () => {
    const { sut, retriveAllVehicleRepositorySpy } = makeSut()
    const retriveSpy = jest.spyOn(retriveAllVehicleRepositorySpy, 'retrive')
    sut.retriveAll()
    expect(retriveSpy).toHaveBeenCalled()
  })
  test('Should throw if RetriveAllVehicleRepository throws', async () => {
    try {
      const { sut, retriveAllVehicleRepositorySpy } = makeSut()
      jest.spyOn(retriveAllVehicleRepositorySpy, 'retrive').mockImplementationOnce(throwError)
      const promise = sut.retriveAll()
      await expect(promise).rejects.toThrow()
    } catch (error) {

    }

  })

})
