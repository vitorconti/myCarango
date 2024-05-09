export interface AddVehicle {
  add (params: AddVehicleParams): Promise<AddVehicleResult>
}

export type AddVehicleParams = {
  name: string,
  brand: string
  year: string
}
export type AddVehicleResult = boolean

