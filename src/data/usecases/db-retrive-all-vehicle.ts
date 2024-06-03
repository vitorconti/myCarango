import { RetriveAllVehicleRepository } from '@/data/protocols/retrive-all-vehicle-repository';
import { RetriveAllVehicle, RetriveVehicleResult } from '@/domain/usecases/retrive-all-vehicles';

export class DbRetriveAllVehicle implements RetriveAllVehicle {
  constructor (private readonly retriveAllVehicleRepository: RetriveAllVehicleRepository) { }
  retriveAll (): Promise<RetriveVehicleResult> {
    this.retriveAllVehicleRepository.retrive()
    return Promise.resolve({ brand: '', id: 0, name: '', year: '1' })
  }

}