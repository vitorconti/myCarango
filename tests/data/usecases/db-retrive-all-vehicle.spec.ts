import { DbRetriveAllVehicle } from '@/data/usecases/db-retrive-all-vehicle'
import { RetriveAllVehicleRespositorySpy } from '@/tests/data/mocks/mock-db-vehicle'


describe('DbRetriveAllVehicle usecase', () => {
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
  test('Should call RetriveAllVehicleRepository ', () => {
    const { sut, retriveAllVehicleRepositorySpy } = makeSut()
    const retriveSpy = jest.spyOn(retriveAllVehicleRepositorySpy, 'retrive')
    sut.retriveAll()
    expect(retriveSpy).toHaveBeenCalled()
  })
})
