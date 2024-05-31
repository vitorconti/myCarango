import { Validation } from '@/presentation/protocols';
import { error } from 'console';

export class NonNullableFields implements Validation {
  validate (input: any) {
    const arrayOfInputItems = Object.entries(input)
    for (const [fieldName, inputItem] of arrayOfInputItems) {
      if (!inputItem) {
        return new Error(`Field ${fieldName} cannot be null or empty`)
      }
    }
  }
}