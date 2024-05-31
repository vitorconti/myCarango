import 'module-alias/register'
import { makeAddVehicleController } from '@/main/factories/controllers/add-vehicle-controller-factory'
import { CreateVehicleCli } from '@/main/adapters/stdin-adapters/create-vehicle-cli'

const start = () => {
  const createVehicle = new CreateVehicleCli()
  createVehicle.ignite('Enter name, brand and year', makeAddVehicleController())
}
start()