export interface RetriveAllVehicle {
  retriveAll (): Promise<RetriveVehicleResult>
}

export type RetriveVehicleResult = {
  id: number,
  name: string,
  brand: string
  year: string
}


