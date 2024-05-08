export interface AddVehicle {
  Params: {
    name: string,
    brand: string
    year: string
  }
  add (params: AddVehicle['Params']): Promise<boolean>
}
