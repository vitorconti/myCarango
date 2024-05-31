import { AddVehicleParams, AddVehicleResult } from '@/domain/usecases/add-vehicle';
import { StdinAdapter } from '@/main/adapters/stdin-adapters/protocols';
import { Controller } from '@/presentation/protocols';

export class CreateVehicleCli implements StdinAdapter<AddVehicleParams, AddVehicleResult> {

  ignite (startMessage: string, controller: Controller<AddVehicleParams, AddVehicleResult>) {
    process.stdout._write(startMessage + `separated by commas \n`, 'utf-8', (err => err))

    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', async (data: string) => {
      const input = data.trim();
      const [name, brand, year] = input.split(',').map(item => item.trim());
      const request = { name, brand, year };

      try {
        const httpResponse = await controller.handle(request);
        console.log('Response:', httpResponse);
      } catch (error) {
        console.error('Error:', error.message);
      }

      process.stdin.pause();
    });

    process.stdin.resume();

  }
}