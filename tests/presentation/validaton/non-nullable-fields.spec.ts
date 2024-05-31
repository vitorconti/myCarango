import { NonNullableFields } from '@/presentation/validation/non-nullable-fields-validator'


const makeSut = (): NonNullableFields => {
  return new NonNullableFields()
}

describe('NonNullableFields', () => {
  test('Should return wich field is null', () => {
    const sut = makeSut()
    const error = sut.validate({ any_property: null })
    expect(error.message).toEqual('Field any_property cannot be null or empty')
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ any_property: 'any_value' })
    expect(error).toBeFalsy()
  })
})
